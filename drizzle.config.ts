import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default {
  schema: "src/server/db/schema.ts",
  out: "src/server/db/migrations",
  driver: "mysql2",
  dbCredentials: {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    uri: process.env.DATABASE_URL!,
  },
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  tablesFilter: [process.env.DATABASE_TABLE_PREFIX!],
} satisfies Config;
