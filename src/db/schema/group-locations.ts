import { relations, sql } from "drizzle-orm";
import { datetime, int, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { prefixedMySqlTable } from "../prefixedMySqlTable";
import { groupsTable } from "./groups";

// drizzle schema for group-locations table
export const groupLocationsTable = prefixedMySqlTable("group_locations", {
  id: int("int").autoincrement().primaryKey(),
  groupId: varchar("group_id", { length: 7 }).notNull(), //.references(() => groupsTable.id),
  addressLine1: varchar("address_line_1", { length: 255 }).notNull(),
  addressLine2: varchar("address_line_2", { length: 255 }),
  town: varchar("town", { length: 255 }).notNull(),
  county: varchar("county", { length: 255 }),
  postCode: varchar("post_code", { length: 8 }).notNull(),
  placeId: varchar("place_id", { length: 255 }),
  description: varchar("description", { length: 255 }),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: datetime("updated_at").default(
    sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`,
  ),
});

// relations (many to one)
export const groupLocationsRelations = relations(
  groupLocationsTable,
  ({ one }) => ({
    group: one(groupsTable, {
      fields: [groupLocationsTable.groupId],
      references: [groupsTable.id],
    }),
  }),
);

// zod insert schema for group-locations table
export const zodInsertGroupLocationsSchema = createInsertSchema(
  groupLocationsTable,
  {
    // startTime: z.string().regex(timeRegexp),
  },
);

// zod select schema for group-locations table
export const zodSelectGroupLocationsSchema =
  createSelectSchema(groupLocationsTable);

// typescript types for groups table
export type GroupLocations = typeof groupLocationsTable.$inferSelect;
export type NewGroupLocations = typeof groupLocationsTable.$inferInsert;
export type UpdateGroupLocations = Required<Pick<GroupLocations, "id">> &
  Partial<Omit<GroupLocations, "id">>;