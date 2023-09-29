import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  listMovieController,
  updateMovieController,
} from "../controllers/movies.controllers";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import { movieSchema } from "../schemas/movies.schemas";
import ensureImagemExistsMiddleware from "../middleware/ensureImagemExists.middleware";
import ensureTituloExistsMiddleware from "../middleware/ensureTituloExists.middleware";
import ensureMovieExistsMiddleware from "../middleware/ensuerMovieExists.middleware";

const moviesRoutes: Router = Router();

moviesRoutes.post(
  "",
  ensureDataIsValidMiddleware(movieSchema),
  ensureImagemExistsMiddleware,
  ensureTituloExistsMiddleware,
  createMovieController
);

moviesRoutes.get("", listMovieController);

moviesRoutes.patch(
  "/:id",
  ensureMovieExistsMiddleware,
  ensureDataIsValidMiddleware(movieSchema),
  ensureImagemExistsMiddleware,
  ensureTituloExistsMiddleware,
  updateMovieController
);

moviesRoutes.delete("/:id", ensureMovieExistsMiddleware, deleteMovieController);

export default moviesRoutes;
