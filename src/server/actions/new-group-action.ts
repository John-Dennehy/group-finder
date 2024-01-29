"use server"; // don't forget to add this!

import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";
import { db } from "../../db";
import groupsTable, { zodInsertGroupSchema } from "../../db/schema/groups_schema";

type ActionSuccess = { success: true; status: "success" };
type ActionError = { success: false; status: "error"; errorMessage: string };
type ActionResponse = ActionSuccess | ActionError;

const schema = zodInsertGroupSchema;

export const newGroupAction = action(zodInsertGroupSchema, async (newGroup) => {
  // ... create new group in database
  await db.insert(groupsTable).values(newGroup).execute();

  // ... return success message	on server console
  console.log("newGroupAction", newGroup);

  // ... revalidate the home page
  await revalidatePath("/");
  return { success: "Group created" };
});
