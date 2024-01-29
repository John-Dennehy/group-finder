import { mysqlTableCreator } from "drizzle-orm/mysql-core";

// add prefix for multi-project schema in single Planetscale database
export const prefixedMySqlTable = mysqlTableCreator(
  (name) => `${process.env.DB_TABLE_PREFIX}_${name}`,
);
