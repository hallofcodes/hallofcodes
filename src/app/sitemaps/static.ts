import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hallofcodes.vercel.app",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://hallofcodes.vercel.app/blog",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://hallofcodes.vercel.app/projects",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://hallofcodes.vercel.app/community",
    },
    {
      url: "https://hallofcodes.vercel.app/members",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://hallofcodes.vercel.app/terms-of-service",
    },
    {
      url: "https://hallofcodes.vercel.app/privacy-policy",
    },
    {
      url: "https://hallofcodes.vercel.app/community-guidelines",
    },
  ];
}
