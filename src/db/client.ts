import { Client, Config as PlanetscaleConfig } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import * as schema from "./schema";

export const planetscaleConfig: PlanetscaleConfig = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

// new way of using drizzle (from v0.30.0) using a Client instance
const client = new Client(planetscaleConfig);
export const db = drizzle(client, { schema });  

export default db;
