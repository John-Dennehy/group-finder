"use client";

import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import { ColumnDef } from "@tanstack/react-table";
import { GroupSelect } from "@/server/db/schema";
import { SortButton } from "./sort-button";
import { DateTimeRow } from "./date-time-row";
import Link from "next/link";

export const columns: ColumnDef<GroupSelect>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <SortButton column={column}>Name</SortButton>,
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
    header: ({ column }) => (
      <SortButton column={column}>Description</SortButton>
    ),
  },
  {
    accessorKey: "active",
    header: ({ column }) => <SortButton column={column}>Active</SortButton>,
    cell: (cell) => {
      const value = cell.row.original.active;
      // use green check or red x instead of active value. making sure it is horizontally centered in the column
      return (
        <div className="flex justify-center">
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
    header: ({ column }) => <SortButton column={column}>Created At</SortButton>,
    cell: (cell) => {
      const dateValue = cell.row.original.createdAt
        ? new Date(cell.row.original.createdAt)
        : null;
      return <DateTimeRow dateValue={dateValue} />;
    },
  },
  {
    accessorKey: "verifiedAt",
    header: ({ column }) => (
      <SortButton column={column}>Verified At</SortButton>
    ),
    cell: (cell) => {
      const dateValue = cell.row.original.verifiedAt
        ? new Date(cell.row.original.verifiedAt)
        : null;
      return <DateTimeRow dateValue={dateValue} />;
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => <SortButton column={column}>Updated At</SortButton>,
    cell: (cell) => {
      const dateValue = cell.row.original.updatedAt
        ? new Date(cell.row.original.updatedAt)
        : null;
      return <DateTimeRow dateValue={dateValue} />;
    },
  },
];
