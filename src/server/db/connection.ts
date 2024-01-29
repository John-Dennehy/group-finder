import { Config as PlanetscaleConfig, connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import * as schema from "./schema";

export const planetscaleConfig: PlanetscaleConfig = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

// create the connection
export const connection = connect(planetscaleConfig);
export const db = drizzle(connection, { schema });

export default db;
