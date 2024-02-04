"use client";

import { zodInsertGroupScheduleSchema } from "@/db/schema";
import { newGroupScheduleAction } from "@/server/actions/new-group-schedule-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type NewScheduleFormProps = {
  groupId?: string;
};

export function NewScheduleForm({ groupId }: NewScheduleFormProps) {
  const form = useForm<z.infer<typeof zodInsertGroupScheduleSchema>>({
    resolver: zodResolver(zodInsertGroupScheduleSchema),
    defaultValues: {
      groupId: groupId ?? "",
      startTime: "",
      endTime: "",
      weekday: "Mon",
      active: true,
      description: "",
    },
  });

  const { execute: createNewSchedule, status } = useAction(
    newGroupScheduleAction,
    {
      onSuccess: (data, input, reset) => {
        toast.success(`Success: ${input.weekday} schedule saved`);
        form.reset();
      },
      onError: (error, input) => {
        if (error.fetchError)
          toast.error(
            `Fetch Error: ${error.fetchError}. Failed to create ${input.weekday}`,
          );
        if (error.serverError) {
          console.error(`${error.serverError}`);
          toast.error(`Server Error: Failed to create ${input.weekday}`);
        }
        if (error.validationErrors)
          toast.error(`Validation errors: ${error.validationErrors}`);
      },
    },
  );

  const isLoading = status === "executing";

  function handleValidSubmit(
    data: z.infer<typeof zodInsertGroupScheduleSchema>,
  ) {
    console.log(data);
    createNewSchedule(data);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleValidSubmit)}>
          <FormField
            control={form.control}
            name="groupId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="weekday"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="weekday">Weekday</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="startTime">Start Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="endTime">End Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Group description..."
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={isLoading} type="submit">
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </form>
      </Form>
    </>
  );
}

