"use server";

import { updateGroup } from "@/db/queries/updateGroup";
import { UpdateGroup, zodUpdateGroupSchema } from "@/db/schema/groups_schema";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";

type ActionSuccess = { success: true; status: "success" };
type ActionError = { success: false; status: "error"; errorMessage: string };
type ActionResponse = ActionSuccess | ActionError;

const schema = zodUpdateGroupSchema;

export const updateGroupAction = action(
  zodUpdateGroupSchema,
  async (updatedGroup) => {
    // ... create update group in database
    await updateGroup(updatedGroup as UpdateGroup);

    // ... return success message	on server console
    console.log("updateGroupAction", updateGroup);

    // ... revalidate the home page
    await revalidatePath("/");
    return { success: "Group created" };
  },
);
