"use server"; // don't forget to add this!

import { action } from "@/lib/safe-action-client";
import { zodInsertGroupSchema } from "../db/schema";

const schema = zodInsertGroupSchema;

export const newGroupAction = action(zodInsertGroupSchema, async (newGroup) => {
  // ... create new group in database
  // pause for 2 seconds to simulate a slow database
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("newGroupAction", newGroup);

  return { success: "Group created" };
});
