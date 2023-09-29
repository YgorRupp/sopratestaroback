import { Repository } from "typeorm";
import { iMovieUpdateReturn } from "../interfaces/movie.interface";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { updateMoviesSchema } from "../schemas/movies.schemas";

const updateMovieService = async (
  movieData: any,
  idMovie: number
): Promise<iMovieUpdateReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const oldMovieData = await movieRepository.findOneBy({
    id: idMovie,
  });

  const movie = movieRepository.create({
    ...oldMovieData,
    ...movieData,
  });

  await movieRepository.save(movie);

  const updatedMovie = updateMoviesSchema.parse(movie);

  return updatedMovie;
};

export default updateMovieService;
