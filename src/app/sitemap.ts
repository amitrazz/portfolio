import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://amitrazz.in',
      // Use a stable date — new Date() changes on every build, breaking CDN ETag caching
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
