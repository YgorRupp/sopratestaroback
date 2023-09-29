import { Request, Response } from "express";
import { iMovies } from "../interfaces/movie.interface";
import createMovieService from "../services/createMovie.service";
import listMoviesService from "../services/listMovie.service";
import deleteMovieService from "../services/deleteMovie.service";
import updateMovieService from "../services/updateMovie.service";

const createMovieController = async (req: Request, res: Response) => {
  const movieData: iMovies = req.body;

  const newMovie = await createMovieService(movieData);

  return res.status(201).json(newMovie);
};

const listMovieController = async (req: Request, res: Response) => {
  const movies = await listMoviesService();

  return res.status(200).json(movies);
};

const updateMovieController = async (req: Request, res: Response) => {
  const movieData = req.body;
  const idMovie = parseInt(req.params.id);

  const updatedMovie = await updateMovieService(movieData, idMovie);

  return res.json(updatedMovie);
};

const deleteMovieController = async (req: Request, res: Response) => {
  await deleteMovieService(parseInt(req.params.id));

  return res.status(204).send();
};

export {
  createMovieController,
  listMovieController,
  updateMovieController,
  deleteMovieController,
};
