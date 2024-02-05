"use server";

import { db } from "@/db";

export async function selectAllGroups() {
  try {
    return await db.query.groupsTable.findMany({
      with: {
        schedule: true,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error fetching groups");
  }
}
