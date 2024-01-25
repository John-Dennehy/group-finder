"use client";

import {
  CheckCircledIcon,
  CrossCircledIcon,
  TrashIcon,
  EyeOpenIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";
import { GroupSelect } from "@/server/db/schema";
import { DateTimeRow } from "./date-time-row";
import Link from "next/link";
import { ColumnHeader } from "./column-header";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<GroupSelect>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <ColumnHeader column={column} />,
  },
  {
    accessorKey: "name",
    enableHiding: false,
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: (props) => {
      const groupId = props.row.original.id;
      const groupName = props.row.original.name;
      return (
        <Button variant={"link"} asChild>
          <Link className="flex items-center" href={`/group/${groupId}`}>
            {groupName}
          </Link>
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => <ColumnHeader column={column} />,
  },
  {
    accessorKey: "active",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: (cell) => {
      const value = cell.row.original.active;
      // use green check or red x instead of active value. making sure it is horizontally centered in the column
      return (
        <div className="flex justify-left pl-4">
          {value ? (
            <CheckCircledIcon className=" h-6 w-6 text-green-500" />
          ) : (
            <CrossCircledIcon className="h-6 w-6 text-red-500" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: (cell) => {
      const dateValue = cell.row.original.createdAt
        ? new Date(cell.row.original.createdAt)
        : null;
      return <DateTimeRow dateValue={dateValue} />;
    },
  },
  {
    accessorKey: "verifiedAt",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: (cell) => {
      const dateValue = cell.row.original.verifiedAt
        ? new Date(cell.row.original.verifiedAt)
        : null;
      return <DateTimeRow dateValue={dateValue} />;
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: (cell) => {
      const dateValue = cell.row.original.updatedAt
        ? new Date(cell.row.original.updatedAt)
        : null;
      return <DateTimeRow dateValue={dateValue} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const group = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/group/${group.id}`}>
                  <EyeOpenIcon className="mr-2 h-4 w-4" /> View
                </Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/group/${group.id}/edit`}>
                  <Pencil1Icon className="mr-2 h-4 w-4" /> Edit
                </Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                variant={"destructive"}
                className="w-full"
                // TODO: add delete functionality
                onClick={() => alert(`TODO: Deleted group ${group.name}`)}
              >
                <TrashIcon className="mr-2 h-4 w-4" /> Delete
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
