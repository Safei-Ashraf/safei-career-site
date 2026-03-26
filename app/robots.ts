import type { MetadataRoute } from "next";
import { hasProductionSiteUrl, siteUrl } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  if (!hasProductionSiteUrl) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      }
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
