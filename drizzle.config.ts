import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "src/server/db/schema.ts",
  out: "src/server/db/migrations",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DB_URI as string,
  },
  tablesFilter: [process.env.DB_TABLE_PREFIX as string],
} satisfies Config;
