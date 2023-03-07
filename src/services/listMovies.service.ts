import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import {Movie} from "../entities";
import { iMovie, iMovieCreate } from "../interfaces";
import { movieSchema } from "../schemas";

export const listMoviesService = async (
): Promise<iMovie> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const newMovie = movieRepo.create();

  await movieRepo.save(newMovie);

  return movieSchema.parse(newMovie);
};
