"use client";

import { zodInsertGroupScheduleSchema } from "@/db/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function NewScheduleForm() {
  const form = useForm<z.infer<typeof zodInsertGroupScheduleSchema>>({
    resolver: zodResolver(zodInsertGroupScheduleSchema),
    defaultValues: {
      groupId: "",
      startTime: "",
      endTime: "",
      weekday: undefined,
      active: true,
      description: "",
    },
  });

  const isLoading = false;

  function handleValidSubmit(
    data: z.infer<typeof zodInsertGroupScheduleSchema>,
  ) {
    alert(`${JSON.stringify(data)}`);
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleValidSubmit)}>
        <FormItem>
          <FormLabel htmlFor="groupId">Group Id</FormLabel>
          <FormControl>
            <Input
              {...form.register("groupId")}
              type="text"
              id="groupId"
              name="groupId"
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="startTime">Start Time</FormLabel>
          <FormControl>
            <Input
              {...form.register("startTime")}
              type="text"
              id="startTime"
              name="startTime"
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="endTime">End Time</FormLabel>
          <FormControl>
            <Input
              {...form.register("endTime")}
              type="text"
              id="endTime"
              name="endTime"
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="weekday">Weekday</FormLabel>
          <FormControl>
            <Input
              {...form.register("weekday")}
              type="text"
              id="weekday"
              name="weekday"
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="active">Active</FormLabel>
          <FormControl>
            <Input
              {...form.register("active")}
              type="text"
              id="active"
              name="active"
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="description">Description</FormLabel>
          <FormControl>
            <Textarea
              {...form.register("description")}
              id="description"
              name="description"
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
        </FormItem>
      </form>
    </Form>
  );
}

