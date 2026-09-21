/** Site-owned catalog entry; this is not a public marketplace publication. */
export const PERSONABIO_ID = "personabio-bio";
export const PERSONABIO_PREVIEW_PATH = "/themes/personabio/preview";
export function personabioTheme(origin: string) {
  return {
    id: PERSONABIO_ID, name: "Persona Bio",
    description: "Active on this site. A personal profile and blog theme with a circular portrait, a two-column card, and social icons below the biography. Edit the profile in the bio_profiles collection, social links in the social menu, and navigation in the primary menu.",
    author: { id: "local", name: "Persona Bio", verified: false, avatarUrl: null },
    keywords: ["bio", "personal", "minimal", "personabio", "local", "active"],
    previewUrl: `${origin}${PERSONABIO_PREVIEW_PATH}`, demoUrl: `${origin}/themes/personabio/demo`,
    hasThumbnail: true, thumbnailUrl: `${origin}/themes/personabio/preview.png`,
    createdAt: "2026-09-19T00:00:00Z", updatedAt: "2026-09-21T00:00:00Z",
    repositoryUrl: "https://github.com/ahmetcigsar/emdash-theme-persona-bio", homepageUrl: `${origin}/`, license: "MIT",
    screenshotCount: 4, screenshotUrls: [
      `${origin}/themes/personabio/preview.png`,
      `${origin}/themes/personabio/home-mobile-en.png`,
      `${origin}/themes/personabio/posts-desktop-en.png`,
      `${origin}/themes/personabio/posts-mobile-en.png`,
    ],
  };
}
