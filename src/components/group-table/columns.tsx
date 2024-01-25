"use client";

import { ColumnDef, Row, Cell } from "@tanstack/react-table";
import { GroupSelect } from "@/server/db/schema";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { SortButton } from "./SortButton";

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

type RowDateTimeProps = {
  dateValue: Date | null;
};

export function DateTimeRow({ dateValue: rowValue }: RowDateTimeProps) {
  if (!rowValue) {
    return <div className="font-medium text-center">-</div>;
  }
  const formattedDate = formatDateTime(rowValue);
  return <div className="font-medium text-left">{formattedDate}</div>;
}

export function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat(["en-GB", "en-US"], {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}
