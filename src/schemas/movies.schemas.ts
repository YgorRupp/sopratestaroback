import { z } from "zod";

const movieSchema = z.object({
  imagem: z.string(),
  titulo: z.string(),
  nota: z.string(),
});

const createMovieSchema = movieSchema.extend({
  id: z.number().positive(),
});

const returnMultipleMovieSchema = createMovieSchema.array();

const updateMoviesSchema = movieSchema.partial();

const updateMoviesSchemaReturn = updateMoviesSchema.extend({
  id: z.string().optional(),
});

export {
  movieSchema,
  createMovieSchema,
  returnMultipleMovieSchema,
  updateMoviesSchema,
  updateMoviesSchemaReturn,
};
