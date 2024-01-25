"use client";

import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import { ColumnDef } from "@tanstack/react-table";
import { GroupSelect } from "@/server/db/schema";
import { DateTimeRow } from "./date-time-row";
import Link from "next/link";
import { ColumnHeader } from "./column-header";

export const columns: ColumnDef<GroupSelect>[] = [
  {
    accessorKey: "name",
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
];
