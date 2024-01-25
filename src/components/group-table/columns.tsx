"use client";

import { ColumnDef } from "@tanstack/react-table";
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
  },
  {
    accessorKey: "verifiedAt",
    header: ({ column }) => (
      <SortButton column={column}>Verified At</SortButton>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => <SortButton column={column}>Updated At</SortButton>,
  },
];
