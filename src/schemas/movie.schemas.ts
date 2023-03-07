import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  name: z.string().min(2).max(50),
  description: z.string().optional().nullable(),
  duration: z.number(),
  price: z.number(),
});

export const updateMovieSchema = z
  .object({
    name: z.string().min(2).max(50),
    description: z.string().optional(),
    duration: z.number(),
    price: z.number(),
  })
  .partial();

export const createMovieSchema = movieSchema.omit({ id: true });

export const allMoviesSchema = z.array(movieSchema);
