import { prefixedMySqlTable } from "@/db/prefixedMySqlTable";
import { attendeeTypesTable, groupsTable } from "@/db/schema";
import { relations, sql } from "drizzle-orm";
import {
  datetime,
  mysqlEnum,
  primaryKey,
  varchar,
} from "drizzle-orm/mysql-core";

const filterType = ["include", "exclude"] as const;

// drizzle schema for group-attendee-type table
export const groupAttendeeTypesTable = prefixedMySqlTable(
  "group_attendee_types",
  {
    groupId: varchar("group_id", { length: 7 }).notNull(), //.references(() => groupsTable.id),
    attendeeTypeId: varchar("attendee_type_id", { length: 255 }).notNull(), //.references(() => attendeeTypesTable.id),
    filterType: mysqlEnum("filter_type", filterType)
      .default("include")
      .notNull(),
    createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  },
  // define a composite primary key  using the groupId and attendeeType
  (table) => {
    return {
      pk: primaryKey({ columns: [table.groupId, table.attendeeTypeId] }),
    };
  },
);

// relations (many to many)
export const groupAttendeeTypesRelations = relations(
  groupAttendeeTypesTable,
  ({ one }) => ({
    group: one(groupsTable, {
      fields: [groupAttendeeTypesTable.groupId],
      references: [groupsTable.id],
    }),
    attendeeType: one(attendeeTypesTable, {
      fields: [groupAttendeeTypesTable.attendeeTypeId],
      references: [attendeeTypesTable.id],
    }),
  }),
);

