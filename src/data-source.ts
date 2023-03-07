import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");
  const dbUrl: string | undefined = process.env.DATABASE_URL;
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [migrationPath],
    entities: [entitiesPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());