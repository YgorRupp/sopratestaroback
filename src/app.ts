import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import moviesRoutes from "./routers/movies.routes";
import cors from "cors";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/movies", moviesRoutes);

app.use(handleErrors);

export default app;
