import { defineCollection, z } from 'astro:content';

// Erweiterte API-Pricing Schema für verschiedene Tool-Typen
const apiPricingSchema = z.object({
  models: z.array(z.object({
    name: z.string(),
    
    // Pricing kann verschiedene Formate haben
    input_price: z.number().optional(),
    output_price: z.number().optional(),
    price: z.number().optional(), // Für einfache Pricing
    
    // Billing-Modelle
    per_million_tokens: z.boolean().default(false),
    per_image: z.boolean().default(false),
    per_request: z.boolean().default(false),
    per_month: z.boolean().default(false),
    
    // Context/Resolution für verschiedene Tools
    context_window: z.string().optional(),
    resolution: z.string().optional(),
    max_requests: z.string().optional(),
    
    // Metadata
    popular: z.boolean().default(false),
    note: z.string().optional(),
    currency: z.string().default("€")
  })).optional()
});

// Schema für einzelne Preispläne
const pricingPlanSchema = z.object({
  name: z.string(),
  price: z.union([z.number(), z.string()]), // Für "Auf Anfrage"
  billing_cycle: z.enum(["monthly", "yearly", "one-time", "usage-based"]),
  per_user: z.boolean().default(false),
  minimum_users: z.number().optional(),
  features: z.array(z.string()),
  limitations: z.array(z.string()).optional(),
  popular: z.boolean().default(false),
  note: z.string().optional(),
  currency: z.string().default("€")
});

// Schema für kostenlosen Plan
const freePlanSchema = z.object({
  available: z.boolean(),
  price: z.number().default(0),
  currency: z.string().default("€"),
  billing_cycle: z.string(),
  features: z.array(z.string()),
  limitations: z.array(z.string()).optional()
});

// Flexible Vergleichsmetriken für verschiedene Tool-Typen
const comparisonMetricsSchema = z.object({
  // Text-Generation Tools
  messages_per_day: z.record(z.union([z.number(), z.string()])).optional(),
  models_included: z.record(z.array(z.string())).optional(),
  context_window: z.record(z.string()).optional(),
  
  // Image-Generation Tools
  images_per_month: z.record(z.union([z.number(), z.string()])).optional(),
  daily_generations: z.record(z.string()).optional(),
  image_quality: z.record(z.string()).optional(),
  commercial_rights: z.record(z.string()).optional(),
  
  // Video Tools
  video_minutes: z.record(z.union([z.number(), z.string()])).optional(),
  video_quality: z.record(z.string()).optional(),
  
  // Code Tools
  code_completion: z.record(z.string()).optional(),
  languages_supported: z.record(z.union([z.number(), z.string()])).optional(),
  
  // General
  api_access: z.record(z.string()).optional(),
  support_level: z.record(z.string()).optional(),
  file_upload_limit: z.record(z.string()).optional(),
  storage_limit: z.record(z.union([z.number(), z.string()])).optional(),
  team_members: z.record(z.union([z.number(), z.string()])).optional(),
  requests_per_month: z.record(z.union([z.number(), z.string()])).optional(),
  api_calls_per_month: z.record(z.union([z.number(), z.string()])).optional(),
  concurrent_users: z.record(z.union([z.number(), z.string()])).optional(),
  watermark: z.record(z.string()).optional(),
  response_speed: z.record(z.string()).optional(),
  data_training: z.record(z.string()).optional()
});

// Schema für besondere Features
const specialFeaturesSchema = z.array(z.object({
  name: z.string(),
  description: z.string()
})).optional();

// Hauptschema für Tools Collection
const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Basis-Informationen
    title: z.string(),
    description: z.string(),
    category: z.string(),
    pricing: z.enum(['Kostenlos', 'Freemium', 'Kostenpflichtig', 'Eingestellt']),
    affiliate_link: z.string().url(),
    website_url: z.string().url().optional(),
    
    // Bewertungen und Metadaten
    rating: z.number().min(1).max(5).optional(),
    founded: z.string().optional(),
    company: z.string().optional(),
    
    // Feature-Flags
    api_available: z.boolean().default(false),
    mobile_app: z.boolean().default(false),
    free_trial: z.boolean().default(false),
    featured: z.boolean().default(false),
    
    // Listen
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    use_cases: z.array(z.string()).optional(),
    languages: z.array(z.string()).optional(),
    
    // PREIS-STRUKTUR
    pricing_details: z.object({
      free_plan: freePlanSchema.optional(),
      paid_plans: z.array(pricingPlanSchema).optional()
    }).optional(),
    
    // API-Preise (für Entwickler-Tools) - ERWEITERT
    api_pricing: apiPricingSchema.optional(),
    
    // Vergleichs-Metriken - ERWEITERT
    comparison_metrics: comparisonMetricsSchema.optional(),
    
    // Bewertungsmetriken für Preisvergleiche
    price_per_feature_score: z.number().min(1).max(10).optional(),
    value_for_money: z.number().min(1).max(10).optional(),
    price_category: z.enum(["budget", "mid-range", "premium", "enterprise"]).optional(),
    last_price_update: z.string().optional(),
    
    // Besondere Features
    special_features: specialFeaturesSchema,
    
    // Sicherheit & Compliance
    security_features: z.array(z.string()).optional(),
    
    // Legacy-Felder (für Rückwärtskompatibilität)
    content: z.string().optional()
  })
});

export const collections = {
  tools: toolsCollection
};
