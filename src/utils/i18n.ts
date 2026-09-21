export type Locale = "tr" | "en";
export function localeFromUrl(url: URL): Locale {
  return /^\/tr(?:\/|$)/.test(url.pathname) ? "tr" : "en";
}
export function localePath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("/_emdash")) return path;
  const base = path.replace(/^\/tr(?=\/|$|[?#])/, "") || "/";
  // Existing CMS menus can still contain the old content URL prefixes.
  const canonical = base.replace(/^\/(?:pages|posts)\/([^/?#]+)(?=\/|[?#]|$)/, "/$1");
  // The archive has a localized URL; individual post slugs stay at the root.
  const localized = canonical.replace(/^\/(?:posts|yazilar)(?=\/?$|[?#])/, "/posts");
  return locale === "tr" ? `/tr${localized}` : localized;
}
const english: Record<string, string> = {
  "Ayarlar": "Settings", "Görünüm": "Appearance", "Dil": "Language", "Alt bilgi": "Footer",
  "Ana sayfa": "Home", "Hakkımda": "About", "Yazılar": "Posts", "Ana menü": "Main navigation",
  "Görüşme": "Book a meeting", "Fotoğraflar": "Photos", "Menüyü kapat": "Close menu",
  "Tema": "Theme", "Açık": "Light", "Koyu": "Dark", "E-posta": "Email",
  "Kişisel notlar & düşünceler": "Personal notes & thoughts",
  "Profil bağlantıları": "Social links", "profili": "profile", "Profil": "Profile",
  "Renk teması": "Color theme", "Açık tema": "Light theme", "Koyu tema": "Dark theme",
  "Dil seçimi": "Language", "İçeriğe geç": "Skip to content", "Yaşam yolundan notlar": "Notes from life's journey",
  "Yazılarda ara": "Search posts", "Ara": "Search", "Yönetim": "Admin", "Tüm yazılar": "All posts",
  "Ana sayfaya dön": "Back to home", "Notlar, fikirler ve üzerine düşündüklerim.": "Notes, ideas, and things on my mind.",
  "Yazı görünümü": "Post layout", "Liste": "List", "Kare": "Grid", "Tekli": "Single",
  "Biraz düşünce, biraz zaman.": "A little thought, a little time.", "Yeni yazılar burada yerini alacak.": "New posts will appear here.",
  "Notlar & düşünceler": "Notes & thoughts", "Yazıyı oku": "Read post", "dk okuma": "min read",
  "Kategori": "Category", "Etiket": "Tag", "yazı": "posts",
  "Bu kategoride henüz yazı yok.": "No posts in this category yet.", "Bu etikette henüz yazı yok.": "No posts with this tag yet.",
  "Yayın tarihi": "Published", "Okuma süresi": "Reading time", "İçindekiler": "Table of contents", "Bu yazıda": "On this page",
  "Yazar": "Author", "Yazarlar": "Authors", "Etiketler": "Tags", "İlgini Çekebilir": "Keep reading",
  "Yazılar arasında arayın": "Search through posts", "Yazılarda ara...": "Search posts...", "Başlıksız": "Untitled",
  "Bir kelime veya konu yazarak notlar arasında gezinin.": "Explore the notes by searching for a word or topic.",
  "Sayfa bulunamadı": "Page not found", "Aradığınız sayfa bulunamadı.": "The page you are looking for could not be found.",
};
export const translate = (locale: Locale, text: string) => locale === "en" ? english[text] ?? text : text;
export function readingTimeLabel(locale: Locale, minutes: number): string {
  if (locale === "en") return `Reading Time ${minutes} ${minutes === 1 ? "Minute" : "Minutes"}`;
  return `Okuma Süresi ${minutes} Dakika`;
}
export function commentCountLabel(locale: Locale, count: number): string {
  if (locale === "en") return count === 0 ? "No Comments Yet" : `${count} ${count === 1 ? "Comment" : "Comments"}`;
  return count === 0 ? "Henüz Yorum Yok" : `${count} Yorum Var`;
}
export function menuLabel(label: string, locale: Locale) {
  const defaults: Record<string, string> = { Home: "Ana sayfa", About: "Hakkımda", Posts: "Yazılar" };
  return translate(locale, defaults[label] ?? label);
}
