import { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    content: z.string().optional(), // Beide erlauben
    category: z.string(),
    pricing: z.enum(['Kostenlos', 'Freemium', 'Kostenpflichtig']).optional(),
    affiliate_link: z.string().url(),
    website_url: z.string().url().optional(),
    rating: z.number().min(1).max(5).optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    use_cases: z.array(z.string()).optional(),
    founded: z.string().optional(),
    company: z.string().optional(),
    languages: z.array(z.string()).optional(),
    api_available: z.boolean().default(false),
    mobile_app: z.boolean().default(false),
    free_trial: z.boolean().default(false),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  tools: toolsCollection
};