import { getEmDashEntry, getMenuWithCacheHint, getTerm, getTranslations } from "emdash";
import { type Locale } from "./i18n";
import { localizeTurkish } from "./turkish-content";

export async function localizedEntry<T extends string>(collection: T, slug: string, options: { locale: Locale }) {
  const result = await getEmDashEntry(collection, slug, options);
  // Astro 7 reports a missing locale row as LiveEntryNotFoundError.
  const missing = !result.error || result.error.name === "LiveEntryNotFoundError";
  if (result.entry || !missing) return result;
  const fallbackLocale = options.locale === "tr" ? "en" : "tr";
  const fallback = await getEmDashEntry(collection, slug, { locale: fallbackLocale });
  if (fallback.entry && typeof fallback.entry.data.id === "string") {
    const { translations } = await getTranslations(collection, fallback.entry.data.id);
    const translated = translations.find(item => item.locale === options.locale && item.status === "published" && item.slug);
    if (translated?.slug) return getEmDashEntry(collection, translated.slug, options);
  }
  return {
    ...fallback,
    entry: options.locale === "tr" && fallback.entry ? localizeTurkish(fallback.entry) : fallback.entry,
    fallbackLocale,
    cacheHint: { ...result.cacheHint, tags: [...(result.cacheHint.tags ?? []), ...(fallback.cacheHint.tags ?? [])] },
  };
}
export async function localizedMenu(name: string, options: { locale: Locale }) {
  const result = await getMenuWithCacheHint(name, options);
  if (result.data || options.locale !== "tr") return result;
  const fallback = await getMenuWithCacheHint(name, { locale: "en" });
  return fallback.data ? { ...fallback, data: localizeTurkish(fallback.data) } : fallback;
}
export async function localizedTerm(name: string, slug: string, options: { locale: Locale; includeCounts: boolean }) {
  const result = await getTerm(name, slug, options);
  if (result || options.locale !== "tr") return result;
  const fallback = await getTerm(name, slug, { ...options, locale: "en" });
  return fallback ? localizeTurkish(fallback) : fallback;
}
