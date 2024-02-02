import { weekdays } from "@/lib/date-time";
import { timeRegexp } from "@/lib/date-time";
import { relations, sql } from "drizzle-orm";
import { boolean, datetime, int, text, varchar } from "drizzle-orm/mysql-core";
import { mysqlEnum, time } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { prefixedMySqlTable } from "../prefixedMySqlTable";
import { groupsTable } from "./groups-schema";

// drizzle schema for group-schedule table
export const groupScheduleTable = prefixedMySqlTable("groups", {
  id: int("int").autoincrement().primaryKey(),
  groupId: varchar("group_id", { length: 6 }).notNull(), //.references(() => groupsTable.id),
  weekday: mysqlEnum("weekday", weekdays).notNull(),
  startTime: time("start-time").notNull(),
  endTime: time("end-time").notNull(),
  description: varchar("description", { length: 255 }),
  active: boolean("active").notNull().default(true),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: datetime("updated_at").default(
    sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`,
  ),
});

// relations (many to one)
export const groupOpenHoursRelations = relations(
  groupScheduleTable,
  ({ one }) => ({
    group: one(groupsTable, {
      fields: [groupScheduleTable.groupId],
      references: [groupsTable.id],
    }),
  }),
);

// zod insert schema for group-schedule table
export const zodInsertGroupScheduleSchema = createInsertSchema(
  groupScheduleTable,
  {
    startTime: z.string().regex(timeRegexp),
  },
);

// zod select schema for group-schedule table
export const zodSelectGroupScheduleSchema =
  createSelectSchema(groupScheduleTable);
