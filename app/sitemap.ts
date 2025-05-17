import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL for your site
  const baseUrl = 'https://centralcoastfishingcharters.com'
  
  // Main pages
  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }
  ]
  
  return pages
} 