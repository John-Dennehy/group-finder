import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load environment variables from .env.development file.
// Changes to Production DB handled by PLanetscale branch deployments
// https://app.planetscale.com/

dotenv.config({ path: ".env.development.local" });

export default defineConfig({
  schema: "src/server/db/schema/*.ts",
  out: "src/server/db/migrations",
  driver: "mysql2",
  dbCredentials: {
    uri: `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DB_NAME}?ssl={"rejectUnauthorized":true}`,
  },
  tablesFilter: [process.env.DB_TABLE_PREFIX as string],
  schemaFilter: [process.env.DB_TABLE_PREFIX as string],
  strict: true,
  verbose: true,
  introspect: { casing: "camel" },
  breakpoints: true,
});
