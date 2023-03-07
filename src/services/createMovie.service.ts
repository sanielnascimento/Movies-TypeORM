import { AppDataSource } from "../data-source";
import {Movie} from "../entities";
import { iMovie, iMovieCreate, iMovieRepo } from "../interfaces";
import { movieSchema } from "../schemas";

export const createMovieService = async (
  movieData: iMovieCreate
): Promise<iMovie> => {
  const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie);
  const newMovie = movieRepo.create(movieData);

  await movieRepo.save(newMovie);
  
  return movieSchema.parse(newMovie);
};
