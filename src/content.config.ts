import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const tags = z.array(z.string()).default([]);
const url = z
  .string()
  .refine((value) => URL.canParse(value), "Expected a valid URL.");

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
    tags,
  }),
});

const datedContent = z.object({
  title: z.string(),
  description: z.string().optional(),
  author: z.string().optional(),
  date: z.coerce.date().optional(),
  updated: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  tags,
  externalUrl: url.optional(),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: datedContent.extend({
    role: z.string().optional(),
    repositoryUrl: url.optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
  schema: datedContent,
});

const publications = defineCollection({
  loader: glob({
    base: "./src/content/publications",
    pattern: "**/*.{md,mdx}",
  }),
  schema: datedContent.extend({
    venue: z.string().optional(),
    journal: z.string().optional(),
    authors: z.array(z.string()).optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ base: "./src/content/talks", pattern: "**/*.{md,mdx}" }),
  schema: datedContent.extend({
    event: z.string().optional(),
  }),
});

const teaching = defineCollection({
  loader: glob({ base: "./src/content/teaching", pattern: "**/*.{md,mdx}" }),
  schema: datedContent.extend({
    institution: z.string().optional(),
  }),
});

const cv = defineCollection({
  loader: glob({ base: "./src/content/cv", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(true),
    tags,
  }),
});

export const collections = {
  pages,
  projects,
  writing,
  publications,
  talks,
  teaching,
  cv,
};
