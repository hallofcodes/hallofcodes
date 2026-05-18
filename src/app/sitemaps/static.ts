import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.hallofcodes.org",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.hallofcodes.org/blog",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.hallofcodes.org/projects",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.hallofcodes.org/portfolio",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.hallofcodes.org/community",
    },
    {
      url: "https://www.hallofcodes.org/members",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.hallofcodes.org/terms-of-service",
    },
    {
      url: "https://www.hallofcodes.org/privacy-policy",
    },
    {
      url: "https://www.hallofcodes.org/community-guidelines",
    },
  ];
}
