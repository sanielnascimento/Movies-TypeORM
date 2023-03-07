import { AppDataSource } from "../data-source";
import {Movie} from "../entities";
import { iAllMoviesResponse, iMovieRepo } from "../interfaces";
import { allMoviesSchema } from "../schemas";

export const listMoviesService = async (
): Promise<iAllMoviesResponse> => {
  const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie);
  return allMoviesSchema.parse(await movieRepo.find());
};
