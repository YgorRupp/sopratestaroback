import { Repository } from "typeorm";
import { iMovies, iMoviesReturn } from "../interfaces/movie.interface";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { createMovieSchema } from "../schemas/movies.schemas";

const createMovieService = async (
  movieData: iMovies
): Promise<iMoviesReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie: Movie = movieRepository.create(movieData);

  await movieRepository.save(movie);

  const newMovie = createMovieSchema.parse(movie);

  return newMovie;
};

export default createMovieService;
