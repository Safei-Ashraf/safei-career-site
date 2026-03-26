import type { MetadataRoute } from "next";
import { seoDescription, siteName } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} Career Site`,
    short_name: siteName,
    description: seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#101113",
    theme_color: "#101113",
    categories: ["portfolio", "technology", "business"],
    lang: "en"
  };
}
