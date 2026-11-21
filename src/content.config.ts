import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		category: z.enum(["Voyages", "Rencontres", "Découvertes", "Labutik"]),
		excerpt: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
	}),
});

export const collections = { blog };
