import { boolean, varchar, mysqlTableCreator } from "drizzle-orm/mysql-core";

// add prefix for multi-project schema in single Planetscale database
const prefixedMySqlTable = mysqlTableCreator((name) => `testing_${name}`);

// drizzle schema for groups table
export const groupsTable = prefixedMySqlTable("groups", {
  id: varchar("id", { length: 6 }).primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  active: boolean("active").default(false).notNull(),
});

export default groupsTable;
