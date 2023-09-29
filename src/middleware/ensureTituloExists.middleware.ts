import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const ensureTituloExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const titulo = req.body.titulo;

  if (titulo) {
    const findTitulo = await movieRepository.findOneBy({
      titulo: titulo,
    });
    if (findTitulo) {
      throw new AppError("Titulo Already Exists", 409);
    }
  }

  return next();
};

export default ensureTituloExistsMiddleware;
