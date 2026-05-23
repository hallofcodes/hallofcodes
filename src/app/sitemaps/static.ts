import type { MetadataRoute } from "next";

// the default locale is "" (empty string), so it is included first == english ==
const locales = [""];

const routes = [
  "",
  "/blog",
  "/community",
  "/community-guidelines",
  "/members",
  "/portfolio",
  "/projects",
  "/privacy-policy",
  "/terms-of-service",
];

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.hallofcodes.org"
    : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      urls.push({
        url: `${baseUrl}${locale}${route}`,
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.7,
      });
    }
  }

  return urls;
}
