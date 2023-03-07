import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import {Movie} from "../entities";
import { iMovie, iMovieCreate } from "../interfaces";
import { movieSchema } from "../schemas";

export const createMovieService = async (
  movieData: iMovieCreate
): Promise<iMovie> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const newMovie = movieRepo.create(movieData);

  await movieRepo.save(newMovie);

  return movieSchema.parse(newMovie);
};
