import {
  boolean,
  varchar,
  mysqlTableCreator,
  serial,
} from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// add prefix for multi-project schema in single Planetscale database
const prefixedMySqlTable = mysqlTableCreator((name) => `testing_${name}`);

// drizzle schema for groups table
export const groupsTable = prefixedMySqlTable("groups", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  active: boolean("active").default(false).notNull(),
});

// zod schema for groups table
export const zodInsertGroupSchema = createInsertSchema(groupsTable, {
  // We can add additional validation here.
  // For example, we can check that the username is unique.
  name: z
    .string()
    .min(4, "Group name must be at least 4 characters long")
    .max(16, "Group name must be no more then 16 characters long"),
  active: z.boolean().default(false),
});

export default groupsTable;
