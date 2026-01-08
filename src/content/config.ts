import { defineCollection, z } from 'astro:content';

// Colección de Libros (Ya la tienes)
const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.enum(['novela', 'infantil', 'poesia']),
    publishedAt: z.date(),
    cover: z.string(),
    synopsis: z.string(),
    buyLink: z.string().url().optional(),
    status: z.enum(['published', 'upcoming']),
  }),
});

// 2. NUEVA Colección de POSTS (Blog)
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(), // Resumen para la tarjeta
    // Imagen principal del post (opcional, a veces es solo texto)
    image: z.string().optional(), 
  }),
});

// Exportamos AMBAS colecciones
export const collections = { books, posts }