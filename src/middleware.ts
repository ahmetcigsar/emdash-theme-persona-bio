import { defineMiddleware } from "astro:middleware";
import { personabioTheme, PERSONABIO_ID, PERSONABIO_PREVIEW_PATH } from "./themes/personabio/manifest";

const catalog = "/_emdash/api/admin/themes/marketplace";
const json = (data: unknown) => Response.json({success:true, data}, {headers:{"Cache-Control":"private, no-store"}});

async function fixAdminColorScheme(response: Response) {
  if (!response.ok || !response.headers.get("content-type")?.includes("text/html")) return response;
  const html = await response.text();
  const override = '<style id="persona-bio-admin-mode">html[data-mode="dark"]{color-scheme:dark!important}html[data-mode="light"]{color-scheme:light!important}</style>';
  if (html.includes('id="persona-bio-admin-mode"')) return new Response(html, response);
  return new Response(html.replace("</head>", `${override}</head>`), {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

/** Extend the built-in catalog, retaining EmDash authentication and upstream entries.
 * Runs after next() so core auth, permissions and CSRF checks always execute first.
 * Local catalog handling is deliberately restricted to administrator accounts.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const {url, request} = context;
  const path = url.pathname.replace(/\/$/, "");
  if (path === "/_emdash/admin/themes") return context.redirect("/_emdash/admin/themes/marketplace",302);
  const preview = path === "/_emdash/api/themes/preview" && request.method === "POST";
  let localPreview = false;
  if (preview) {
    try {
      const body = await request.clone().json() as {previewUrl?: unknown};
      localPreview = body.previewUrl === `${url.origin}${PERSONABIO_PREVIEW_PATH}`;
    } catch { /* Let the core endpoint report invalid JSON. */ }
  }
  let response = await next();
  if (path.startsWith("/_emdash/admin")) response = await fixAdminColorScheme(response);
  if (!context.locals.user || context.locals.user.role < 50 || [401,403].includes(response.status)) return response;
  if (localPreview && (response.ok || response.status === 400)) {
    // No remote content export or signing is needed for this same-site preview.
    return json({url: `${url.origin}${PERSONABIO_PREVIEW_PATH}`});
  }
  if (request.method !== "GET") return response;
  const theme = personabioTheme(url.origin);
  if (path === `${catalog}/${PERSONABIO_ID}/thumbnail`) return context.redirect(theme.thumbnailUrl,302);
  if (path === `${catalog}/${PERSONABIO_ID}`) return json(theme);
  if (path !== catalog) return response;
  if (!response.ok && response.status !== 404 && response.status < 500) return response;
  let data: {items: {id:string}[]; nextCursor?:string} = {items:[]};
  if (response.ok) {
    try {
      const payload = await response.clone().json() as {data?: typeof data};
      if (!Array.isArray(payload.data?.items)) return response;
      data = payload.data!;
    } catch { return response; }
  }
  const query = (url.searchParams.get("q") || "").toLocaleLowerCase("tr");
  const keyword = url.searchParams.get("keyword");
  const match = `${theme.name} ${theme.description} ${theme.keywords.join(" ")}`.toLocaleLowerCase("tr").includes(query) && (!keyword || theme.keywords.includes(keyword));
  if (!url.searchParams.get("cursor") && match) data.items = [theme, ...data.items.filter(item => item.id !== PERSONABIO_ID)];
  return json(data);
});
