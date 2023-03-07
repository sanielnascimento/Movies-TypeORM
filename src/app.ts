import "express-async-errors";
import express, { Application, json } from "express";
import { errorHandler } from "./errors";
import movieRouters from "./routes";

const app: Application = express();

app.use(json());

app.use("/movies", movieRouters);

app.use(errorHandler);

export default app;
