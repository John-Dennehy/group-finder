import {
  boolean,
  varchar,
  mysqlTableCreator,
  serial,
} from "drizzle-orm/mysql-core";

// add prefix for multi-project schema in single Planetscale database
const prefixedMySqlTable = mysqlTableCreator((name) => `testing_${name}`);

// drizzle schema for groups table
export const groupsTable = prefixedMySqlTable("groups", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  active: boolean("active").default(false).notNull(),
});

export default groupsTable;
