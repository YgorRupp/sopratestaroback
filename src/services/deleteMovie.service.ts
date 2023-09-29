import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";

const deleteMovieService = async (idMovie: number): Promise<void> => {
  const moviesRepository: Repository<Movie> =
    AppDataSource.getRepository(Movie);

  const movie = await moviesRepository.findOne({
    where: {
      id: idMovie,
    },
  });

  await moviesRepository.remove(movie!);
};

export default deleteMovieService;
