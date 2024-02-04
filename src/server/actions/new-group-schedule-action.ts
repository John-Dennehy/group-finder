"use server";

import { createGroupSchedule } from "@/db/queries/createGroupSchedule";
import { zodInsertGroupScheduleSchema } from "@/db/schema";
import { action } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";

type ActionSuccess = { success: true; status: "success" };
type ActionError = { success: false; status: "error"; errorMessage: string };
type ActionResponse = ActionSuccess | ActionError;

const schema = zodInsertGroupScheduleSchema;

export const newGroupScheduleAction = action(
  schema,
  async (newGroupSchedule) => {
    // ... create new schedule in database
    await createGroupSchedule(newGroupSchedule);

    // ... return success message	on server console
    console.log("newGroupScheduleAction", newGroupSchedule);

    // ... revalidate the home page
    await revalidatePath("/");
    return { success: "Group schedule created" };
  },
);
