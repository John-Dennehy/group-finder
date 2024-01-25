"use client";

import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";

import { ColumnDef } from "@tanstack/react-table";
import { GroupSelect } from "@/server/db/schema";
import { SortButton } from "./sort-button";
import { DateTimeRow } from "./date-time-row";

export type Group = GroupSelect;

export const columns: ColumnDef<Group>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortButton column={column}>Name</SortButton>,
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

export type RowDateTimeProps = {
  dateValue: Date | null;
};
