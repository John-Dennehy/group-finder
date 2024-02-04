"use server";

import { db } from "@/db";
import { NewGroupSchedule, groupScheduleTable } from "@/db/schema";

export async function createGroupSchedule(newGroupSchedule: NewGroupSchedule) {
  try {
    return await db.insert(groupScheduleTable).values(newGroupSchedule);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error updating group");
  }
}
