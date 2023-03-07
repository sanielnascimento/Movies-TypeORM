import { Router } from "express";
import { createMovieController, listMoviesController } from "../controllers";
import { validateDataMiddleware } from "../middlewares";
import { createMovieSchema } from "../schemas";

const movieRouters: Router = Router();

movieRouters.post("", validateDataMiddleware(createMovieSchema), createMovieController)
movieRouters.get("", listMoviesController)

export default movieRouters