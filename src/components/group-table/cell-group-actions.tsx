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
          <Link href={`/group/${groupId}`}>
            <a className="flex items-center">
              <EyeOpenIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              View
            </a>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/group/${groupId}/edit`}>
            <a className="flex items-center">
              <Pencil1Icon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Edit
            </a>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/group/${groupId}/delete`}>
            <a className="flex items-center">
              <TrashIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Delete
            </a>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
