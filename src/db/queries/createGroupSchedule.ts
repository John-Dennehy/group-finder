"use server";

import { db } from "@/db";
import { NewGroupSchedule, groupSchedulesTable } from "@/db/schema";

export async function createGroupSchedule(newGroupSchedule: NewGroupSchedule) {
  try {
    return await db.insert(groupSchedulesTable).values(newGroupSchedule);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error updating group");
  }
}
