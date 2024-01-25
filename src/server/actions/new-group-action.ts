"use server"; // don't forget to add this!

import { action } from "@/lib/safe-action-client";
import groupsTable, { zodInsertGroupSchema } from "../db/schema";
import { db } from "../db";
import { revalidatePath } from "next/cache";

const schema = zodInsertGroupSchema;

export const newGroupAction = action(zodInsertGroupSchema, async (newGroup) => {
  // ... create new group in database
  db.insert(groupsTable).values(newGroup).execute();

  // ... revalidate the home page
  revalidatePath("/");

  // ... return success message	on server console
  console.log("newGroupAction", newGroup);

  return { success: "Group created" };
});
