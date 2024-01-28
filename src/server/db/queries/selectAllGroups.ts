"use server";

import { db } from "../connection";
import { groupsTable } from "../schema/groups_schema";

export default async function selectAllGroups() {
  return await db
    .select()
    .from(groupsTable)
    .catch((error) => {
      console.error(error);
    });
}
