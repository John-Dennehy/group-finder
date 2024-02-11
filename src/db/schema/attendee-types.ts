import { prefixedMySqlTable } from "@/db/prefixedMySqlTable";
import { relations, sql } from "drizzle-orm";
import { boolean, datetime, int, varchar } from "drizzle-orm/mysql-core";
import { groupAttendeeTypesTable } from "./group-attendee-types";

export const attendeeTypesTable = prefixedMySqlTable("attendee_types", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  active: boolean("active").default(true).notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: datetime("updated_at").default(
    sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`,
  ),
});

export const attendeeTypesRelations = relations(
  attendeeTypesTable,
  ({ many }) => ({
    groups: many(groupAttendeeTypesTable),
  }),
);