import { getEmDashCollection } from "emdash";
import type { Locale } from "./i18n";
import { localizeTurkish } from "./turkish-content";

// Preserve the existing English archive until Turkish posts are published.
export async function localizedPosts(locale: Locale, options: {
  limit?: number;
  where?: Record<string, string>;
  orderBy?: { published_at: "desc" };
} = {}) {
  const result = await getEmDashCollection("posts", { ...options, locale });
  if (locale !== "tr" || result.error || result.entries.length) return result;
  const fallback = await getEmDashCollection("posts", { ...options, locale: "en" });
  return {
    ...fallback,
    entries: fallback.entries.map((entry) => localizeTurkish(entry)),
    cacheHint: { ...result.cacheHint, tags: [...(result.cacheHint.tags ?? []), ...(fallback.cacheHint.tags ?? [])] },
  };
}
