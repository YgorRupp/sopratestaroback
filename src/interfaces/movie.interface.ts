import { z } from "zod";
import {
  createMovieSchema,
  movieSchema,
  returnMultipleMovieSchema,
  updateMoviesSchema,
  updateMoviesSchemaReturn,
} from "../schemas/movies.schemas";

type iMovies = z.infer<typeof movieSchema>;
type iMoviesReturn = z.infer<typeof createMovieSchema>;
type iMoviesUpdate = z.infer<typeof updateMoviesSchema>;
type iMovieUpdateReturn = z.infer<typeof updateMoviesSchemaReturn>;
type iMovieList = z.infer<typeof returnMultipleMovieSchema>;

export {
  iMovies,
  iMoviesReturn,
  iMoviesUpdate,
  iMovieUpdateReturn,
  iMovieList,
};
