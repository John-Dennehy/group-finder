"use client";
import { BaseGroup } from "@/db/schema";
import { updateGroupAction } from "@/server/actions/update-group-action";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { useAction } from "next-safe-action/hooks";

export type ActiveCellProps = {
  group: BaseGroup;
};

export function ActiveCell({ group }: ActiveCellProps) {
  const { execute: updateGroup, status } = useAction(updateGroupAction);
  const isLoading = status === "executing";

  function handleClick() {
    updateGroup({
      id: group.id,
      name: group.name,
      active: !group.active,
    });
  }
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className="flex justify-left pl-4" onClick={handleClick}>
      {!isLoading && group.active && (
        <CheckCircledIcon className="h-6 w-6 text-green-500" />
      )}
      {!isLoading && !group.active && (
        <CrossCircledIcon className="h-6 w-6 text-red-500" />
      )}
    </div>
  );
}
