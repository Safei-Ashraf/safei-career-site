import type { MetadataRoute } from "next";
import { hasProductionSiteUrl, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!hasProductionSiteUrl) {
    return [];
  }

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
