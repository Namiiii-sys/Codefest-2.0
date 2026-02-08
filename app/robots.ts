import type { MetadataRoute } from 'next';

export const dynamic = 'force-static'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/api'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/api'],
      },
    ],
    sitemap: 'https://codefest.acmsscbs.in/sitemap.xml',
  }
}
