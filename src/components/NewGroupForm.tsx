"use client";

import groupsTable from "@/server/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";

const zodInsertGroupSchema = createInsertSchema(groupsTable, {
  // We can add additional validation here.
  // For example, we can check that the username is unique.
  name: z
    .string()
    .min(4, "Group name must be at least 4 characters long")
    .max(16, "Group name must be no more then 16 characters long"),
  active: z.boolean().default(false),
});

export default function NewGroupForm() {
  const form = useForm<z.infer<typeof zodInsertGroupSchema>>({
    resolver: zodResolver(zodInsertGroupSchema),
  });

  function handleValidSubmit(data: z.infer<typeof zodInsertGroupSchema>) {
    alert(`Valid: ${JSON.stringify(data)}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleValidSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group Name</FormLabel>
              <FormControl>
                <Input placeholder="Group name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="active"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Active</FormLabel>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
