import { Request, Response } from "express";
import { createMovieService, listMoviesService } from "../services";

export const createMovieController = async (req: Request, res: Response): Promise<Response> => {
    return res.status(201).json(await createMovieService(req.body));
};
  
export const listMoviesController = async (_: Request, res: Response): Promise<Response> => {
    return res.json(await listMoviesService());
};