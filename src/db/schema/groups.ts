import { prefixedMySqlTable } from "@/db/prefixedMySqlTable";
import { groupAttendeeTypesTable } from "@/db/schema";
import { createPublicId } from "@/lib/create-public-id";
import { relations, sql } from "drizzle-orm";
import { boolean, datetime, text, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import {
  groupContactDetailsTable,
  groupLocationsTable,
  groupSchedulesTable,
} from ".";

// drizzle schema for groups table
export const groupsTable = prefixedMySqlTable("groups", {
  id: varchar("id", { length: 7 }).primaryKey().$defaultFn(createPublicId),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  active: boolean("active").default(false).notNull(),
  verifiedAt: datetime("verified_at"),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: datetime("updated_at").default(
    sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`,
  ),
});

export const groupsTableRelations = relations(groupsTable, ({ many }) => ({
  schedule: many(groupSchedulesTable),
  locations: many(groupLocationsTable),
  contactDetails: many(groupContactDetailsTable),
  attendeeTypes: many(groupAttendeeTypesTable),
}));

// zod insert schema for groups table
export const zodInsertGroupSchema = createInsertSchema(groupsTable, {
  name: z
    .string()
    .min(4, "Group name must be at least 4 characters long")
    .max(255, "Group name must be no more then 255 characters long"),
  description: z.string().max(1024).optional(),
});

// zod update schema for groups table
export const zodUpdateGroupSchema = zodInsertGroupSchema.partial({ id: true });

// zod select schema for groups table
export const zodSelectGroupSchema = createSelectSchema(groupsTable);

// typescript types for groups table
export type BaseGroup = typeof groupsTable.$inferSelect;
export type NewGroup = typeof groupsTable.$inferInsert;
export type UpdateGroup = Required<Pick<BaseGroup, "id">> &
  Partial<Omit<BaseGroup, "id">>;

export default groupsTable;
