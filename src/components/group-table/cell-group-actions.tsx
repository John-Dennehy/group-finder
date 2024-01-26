"use client";
import { TrashIcon, EyeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { GroupSelect } from "@/server/db/schema";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type GroupActionsProps = {
  group: GroupSelect;
};

export function GroupActions({ group }: GroupActionsProps) {
  const groupId = group.id;
  const groupName = group.name;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Button variant="link" asChild>
            <Link href={`/group/${groupId}`}>
              <EyeOpenIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              View
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant="link" asChild>
            <Link href={`/group/${groupId}/edit`}>
              <Pencil1Icon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Edit
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant="destructive" asChild>
            <Link href={`/group/${groupId}/delete`}>
              <TrashIcon className="mr-2 h-3.5 w-3.5 text-white" />
              Delete
            </Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}