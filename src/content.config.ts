// Lab data lives in src/data/*.yaml and src/content/**.md — edit those files, not the pages.
// Field guide (Korean): docs/CONTENT_GUIDE.md
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Empty string in YAML means "not provided yet" and is treated as absent.
const opt = z.string().optional().transform((s) => s || undefined);
const optUrl = z.string().url().or(z.literal('')).optional().transform((s) => s || undefined);

const members = defineCollection({
  loader: file('src/data/members.yaml'),
  schema: z.object({
    name: z.string(),
    name_ko: opt,
    role: z.enum(['PI', 'Postdoc', 'PhD', 'MS', 'BS', 'Staff', 'Alumni']),
    period: opt, // e.g. "2024.03 –" or "2021.03 – 2023.02"
    email: opt,
    photo: opt, // path under public/, e.g. /members/jsong.jpg
    interests: opt,
    current: opt, // Alumni only: current affiliation
    homepage: optUrl,
  }),
});

const professor = defineCollection({
  loader: file('src/data/professor.yaml'),
  schema: z.object({
    title: z.string(),
    department: z.string(),
    bio: z.string(),
    education: z.array(z.object({ degree: z.string(), institution: z.string(), year: z.number() })),
    experience: z.array(z.object({ position: z.string(), org: z.string(), period: z.string() })),
    awards: z.array(z.string()).default([]),
    cv: optUrl,
    scholar: optUrl,
    orcid: optUrl,
    linkedin: optUrl,
  }),
});

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    type: z.enum(['journal', 'conference', 'patent', 'book']).default('journal'),
    title: z.string(),
    authors: z.string(), // "*" corresponding, "†" equal contribution
    venue: z.string(),
    year: z.number(),
    volume: opt, // "12(3), 1234–1240"
    doi: opt, // "10.1016/..." only; link is built automatically
    link: optUrl, // use when there is no DOI (patent, preprint)
    pdf: opt, // path under public/, e.g. /papers/kim2026.pdf, or a full URL
    highlight: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.yaml'),
  schema: z.object({
    title: z.string(),
    sponsor: z.string(),
    period: z.string(),
    status: z.enum(['ongoing', 'completed']),
  }),
});

// Markdown: one file per research topic / news post under src/content/.
const research = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: opt, // detail page: full infographic (1200×800)
    cover: opt, // cards on home/list: simple text-free image (600×400); falls back to image
    order: z.number().default(99),
    related: z.array(z.string()).default([]), // publication ids
  }),
});

export const NEWS_CATEGORIES = { paper: 'Paper', grant: 'Grant', award: 'Award', event: 'Event' } as const;
const news = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['paper', 'grant', 'award', 'event']).default('event'),
    image: opt,
  }),
});

const gallery = defineCollection({
  loader: file('src/data/gallery.yaml'),
  schema: z.object({ image: z.string(), caption: z.string(), date: z.coerce.date() }),
});

export const collections = { members, professor, publications, projects, research, news, gallery };
