"use server";

import { db } from "@/db";
import { UpdateGroup, groupsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function updateGroup(group: UpdateGroup) {
  try {
    return await db
      .update(groupsTable)
      .set({ ...group })
      .where(eq(groupsTable.id, group.id));
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error updating group");
  }
}
