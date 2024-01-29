"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { newGroupAction } from "@/server/actions/new-group-action";
import { zodInsertGroupSchema } from "@/server/db/schema/groups_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export default function NewGroupForm() {
	const form = useForm<z.infer<typeof zodInsertGroupSchema>>({
		resolver: zodResolver(zodInsertGroupSchema),
		defaultValues: {
			name: "",
			active: false,
			description: "",
		},
	});

	const { execute: createNewGroup, status } = useAction(newGroupAction, {
		onSuccess: (data, input, reset) => {
			toast.success(`Success: ${input.name} saved`);
			form.reset();
		},
		onError: (error, input) => {
			if (error.fetchError)
				toast.error(
					`Fetch Error: ${error.fetchError}. Failed to create ${input.name}`,
				);
			if (error.serverError) {
				console.error(`${error.serverError}`);
				toast.error(`Server Error: Failed to create ${input.name}`);
			}
			if (error.validationErrors)
				toast.error(`Validation errors: ${error.validationErrors}`);
		},
	});

	const isLoading = status === "executing";

	function handleValidSubmit(data: z.infer<typeof zodInsertGroupSchema>) {
		createNewGroup(data);
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
	);
}
