import { Repository } from "typeorm";
import { iMovieList } from "../interfaces/movie.interface";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { returnMultipleMovieSchema } from "../schemas/movies.schemas";

const listMoviesService = async (): Promise<iMovieList> => {
  const moviesRepository: Repository<Movie> =
    AppDataSource.getRepository(Movie);

  const findMovies: Array<Movie> = await moviesRepository.find();

  const movies = returnMultipleMovieSchema.parse(findMovies);

  return movies;
};

export default listMoviesService;
