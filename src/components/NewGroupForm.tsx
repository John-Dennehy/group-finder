"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useAction } from "next-safe-action/hooks";

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
import { zodInsertGroupSchema } from "@/server/db/schema";
import { newGroupAction } from "@/server/actions/new-group-action";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";

export default function NewGroupForm() {
  const form = useForm<z.infer<typeof zodInsertGroupSchema>>({
    resolver: zodResolver(zodInsertGroupSchema),
    defaultValues: {
      name: "",
      active: false,
      description: "",
    },
  });

  const action = useAction(newGroupAction, {
    onExecute: (input) => {
      // ... show toast on client
    },
    onSuccess: (data, input, reset) => {
      toast.success(`Success: ${input.name} saved`);
      form.reset();
    },
    onError: (error, input, reset) => {
      if (error.fetchError)
        toast.error(
          `Fetch Error: ${error.fetchError}. Failed to create ${input.name}`
        );
      if (error.serverError) {
        console.error(`${error.serverError}`);
        toast.error(`Server Error: Failed to create ${input.name}`);
      }
      if (error.validationErrors)
        toast.error(`Validation errors: ${error.validationErrors}`);
    },
    onSettled: (result, input, reset) => {
      // reset();
    },
  });

  function handleValidSubmit(data: z.infer<typeof zodInsertGroupSchema>) {
    action.execute(data);
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Group description..."
                  {...field}
                  onChange={field.onChange}
                  ref={field.ref}
                  name={field.name}
                  value={field.value} // TODO: fix this type error
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
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
        /> */}

        <Button disabled={action.status === "executing"} type="submit">
          {action.status === "executing" ? "Saving..." : "Save"}
        </Button>
      </form>
    </Form>
  );
}
