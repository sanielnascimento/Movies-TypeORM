import { Request, Response } from "express";
import { createMovieService, listMoviesService } from "../services";

export const createMovieController = async (req: Request, res: Response): Promise<Response> => {
    return res.status(201).json(await createMovieService(req.body));
};
  
export const listMoviesController = async (_: Request, res: Response): Promise<Response> => {
    return res.json(await listMoviesService());
};
  
//   export const retrieveUserController = async (req: Request, res: Response): Promise<Response> => {
//     return res.json(await retrieveUserService(Number(req.user.id)));
//   };
  
//   export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
//     return res.status(200).json(await updateUserService(req.body, Number(req.params.id)));
//   };
  
//   export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
//     await deleteUserService(Number(req.params.id));
//     return res.status(204).send();
//   };
  