import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (seoConfig.siteUrl || "https://havenadvisors.us").replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
