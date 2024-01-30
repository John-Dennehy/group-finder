"use server";

import { db } from "@/db";
import { NewGroup, groupsTable } from "@/db/schema";

export async function createGroup(newGroup: NewGroup) {
  try {
    return await db.insert(groupsTable).values(newGroup);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error updating group");
  }
}
