import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fakeface.com.br";
  const lastModified = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified,
    },
  ];
}
