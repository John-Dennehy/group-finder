"use server"; // don't forget to add this!

import { action } from "@/lib/safe-action-client";
import groupsTable, { zodInsertGroupSchema } from "../db/schema";
import { db } from "../db";

const schema = zodInsertGroupSchema;

export const newGroupAction = action(zodInsertGroupSchema, async (newGroup) => {
  // // pause for 2 seconds to simulate a slow database
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  // ... create new group in database
  db.insert(groupsTable).values(newGroup).execute();

  console.log("newGroupAction", newGroup);

  return { success: "Group created" };
});
