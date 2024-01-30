"use server";

import { createGroup } from "@/db/queries/createGroup";
import { zodInsertGroupSchema } from "@/db/schema/groups_schema";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";

type ActionSuccess = { success: true; status: "success" };
type ActionError = { success: false; status: "error"; errorMessage: string };
type ActionResponse = ActionSuccess | ActionError;

const schema = zodInsertGroupSchema;

export const newGroupAction = action(zodInsertGroupSchema, async (newGroup) => {
  // ... create new group in database
  await createGroup(newGroup);

  // ... return success message	on server console
  console.log("newGroupAction", newGroup);

  // ... revalidate the home page
  await revalidatePath("/");
  return { success: "Group created" };
});
