"use server";

import { db } from "@/db";

export default async function selectAllGroups() {
  try {
    return await db.query.groupsTable.findMany();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error fetching groups");
  }
}
