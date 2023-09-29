import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const ensureImagemExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const imagem = req.body.imagem;

  if (imagem) {
    const findImagem = await movieRepository.findOneBy({
      imagem: imagem,
    });
    if (findImagem) {
      throw new AppError("Imagem Already Exists", 409);
    }
  }

  return next();
};

export default ensureImagemExistsMiddleware;
