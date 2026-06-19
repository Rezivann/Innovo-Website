import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.innovo5477.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/History`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Sponsors`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/meetTeam`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ];
}