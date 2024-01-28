import { createPublicId } from "@/lib/create-public-id";
import { sql } from "drizzle-orm";
import { boolean, varchar, text, timestamp } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { prefixedMySqlTable } from "../prefixedMySqlTable";

// drizzle schema for groups table
export const groupsTable = prefixedMySqlTable("groups", {
  id: varchar("id", { length: 7 }).primaryKey().$defaultFn(createPublicId),
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
  // deletedAt: timestamp("deleted_at"),
});

// TODO: Move validation to where it is used
// zod insert schema for groups table
export const zodInsertGroupSchema = createInsertSchema(groupsTable, {
  // We can add additional validation here.
  // For example, we can check that the username is unique.
  name: z
    .string()
    .min(4, "Group name must be at least 4 characters long")
    .max(255, "Group name must be no more then 255 characters long"),
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
