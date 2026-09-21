import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { formsPlugin } from "@emdash-cms/plugin-forms";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";

const siteUrl = process.env.SITE_URL || "http://localhost:4321";

export default defineConfig({
	site: siteUrl,
	output: "server",
	i18n: { defaultLocale: "en", locales: ["tr", "en"] },
	adapter: cloudflare(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			siteUrl: siteUrl,
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
			plugins: [formsPlugin()],
			marketplace: "https://marketplace.emdashcms.com",
		}),
	],
	fonts: [
		{ provider: fontProviders.google(), name: "DM Sans", cssVariable: "--font-personabio", weights: [400, 500], fallbacks: ["sans-serif"] },
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "JetBrains Mono",
			cssVariable: "--font-mono",
			weights: [400, 500],
			fallbacks: ["monospace"],
		},
	],
	devToolbar: { enabled: false },
});
