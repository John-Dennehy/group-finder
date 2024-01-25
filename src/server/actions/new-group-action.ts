"use server"; // don't forget to add this!

import { action } from "@/lib/safe-action-client";
import { zodInsertGroupSchema } from "../db/schema";

const schema = zodInsertGroupSchema;

export const newGroupAction = action(zodInsertGroupSchema, async (newGroup) => {
  // ... create new group in database

  console.log("newGroupAction", newGroup);

  return { success: "Group created" };
});
