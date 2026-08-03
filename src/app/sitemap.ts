import type { MetadataRoute } from "next";
import { config } from "./config";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.domain,

      lastModified: new Date(),
    },
    {
      url: `${config.domain}/o-nas`,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${config.domain}/regulamin`,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
  ];
}
