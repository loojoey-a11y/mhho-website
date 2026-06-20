import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["/", "/about", "/services", "/contact", "/privacy"];
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : path === "/privacy" ? "yearly" : "monthly",
    priority: path === "/" ? 1 : path === "/privacy" ? 0.3 : 0.8,
  }));
}
