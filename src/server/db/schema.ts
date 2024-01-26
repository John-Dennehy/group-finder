import { createPublicId } from "@/lib/create-public-id";
import { sql } from "drizzle-orm";
import {
  boolean,
  varchar,
  mysqlTableCreator,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// add prefix for multi-project schema in single Planetscale database
const prefixedMySqlTable = mysqlTableCreator(
  (name) =>
    `${process.env.DATABASE_TABLE_PREFIX}_${process.env.NODE_ENV}_${name}`
);

// drizzle schema for groups table
export const groupsTable = prefixedMySqlTable("groups", {
  id: varchar("id", { length: 6 }).primaryKey().$defaultFn(createPublicId),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  active: boolean("active").default(false).notNull(),
  verifiedAt: timestamp("verified_at"),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  deletedAt: timestamp("deleted_at"),
});

// zod insert schema for groups table
export const zodInsertGroupSchema = createInsertSchema(groupsTable, {
  // We can add additional validation here.
  // For example, we can check that the username is unique.
  name: z
    .string()
    .min(4, "Group name must be at least 4 characters long")
    .max(16, "Group name must be no more then 16 characters long"),
  description: z.string().describe("blah").max(1024).optional(),
});

// zod update schema for groups table
export const zodUpdateGroupSchema = zodInsertGroupSchema.partial();

// zod select schema for groups table
export const zodSelectGroupSchema = createSelectSchema(groupsTable, {
  // We can add additional validation here.
});

export type GroupSelect = typeof groupsTable.$inferSelect;
export type GroupInsert = typeof groupsTable.$inferInsert;

export default groupsTable;
