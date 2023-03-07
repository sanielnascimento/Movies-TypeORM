import { Repository } from "typeorm";
import { z } from "zod";
import {
  movieSchema,
  createMovieSchema,
  updateMovieSchema,
  allMoviesSchema,
} from "../schemas";

export type iMovie = z.infer<typeof movieSchema>
export type iMovieCreate = z.infer<typeof createMovieSchema>
export type iMovieUpdate = z.infer<typeof updateMovieSchema>
export type iAllMoviesResponse = z.infer<typeof allMoviesSchema>
export type iMovieRepo = Repository<iMovie>
