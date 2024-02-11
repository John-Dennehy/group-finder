import { relations, sql } from "drizzle-orm";
import { datetime, int, mysqlEnum, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { prefixedMySqlTable } from "../prefixedMySqlTable";
import { groupsTable } from "./groups";

const contactTypes = [
  "email",
  "phone",
  "website",
  "facebook",
  "twitter",
  "instagram",
] as const;

// drizzle schema for group-contact-details table
export const groupContactDetailsTable = prefixedMySqlTable(
  "group_contact_details",
  {
    id: int("int").autoincrement().primaryKey(),
    groupId: varchar("group_id", { length: 7 }).notNull(), //.references(() => groupsTable.id),
    contactType: mysqlEnum("contact_type", contactTypes).notNull(),
    contact: varchar("contact", { length: 255 }).notNull(),
    createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: datetime("updated_at").default(
      sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`,
    ),
  },
);

// relations (many to one)
export const groupContactDetailsRelations = relations(
  groupContactDetailsTable,
  ({ one }) => ({
    group: one(groupsTable, {
      fields: [groupContactDetailsTable.groupId],
      references: [groupsTable.id],
    }),
  }),
);

// zod insert schema for group-contact-details table
export const zodInsertGroupContactDetailsSchema = createInsertSchema(
  groupContactDetailsTable,
  {
    // startTime: z.string().regex(timeRegexp),
  },
);

// zod select schema for group-contact-details table
export const zodSelectGroupContactDetailsSchema = createSelectSchema(
  groupContactDetailsTable,
);

// typescript types for groups table
export type GroupContactDetails = typeof groupContactDetailsTable.$inferSelect;
export type NewGroupContactDetails =
  typeof groupContactDetailsTable.$inferInsert;
export type UpdateGroupContactDetails = Required<
  Pick<GroupContactDetails, "id">
> &
  Partial<Omit<GroupContactDetails, "id">>;