"use client";

import { Button } from "@/components/ui/button";

import { ColumnDef } from "@tanstack/react-table";
import { GroupSelect } from "@/server/db/schema";
import { CellDateTime } from "./date-time-row";
import Link from "next/link";
import { ColumnHeader } from "./column-header";

import { ActiveCell } from "./cell-active";
import { GroupActions } from "./cell-group-actions";

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
    cell: ({ row }) => <ActiveCell active={row.original.active} />,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: ({ cell }) => <CellDateTime cell={cell} />,
  },
  {
    accessorKey: "verifiedAt",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: ({ cell }) => <CellDateTime cell={cell} />,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: ({ cell }) => <CellDateTime cell={cell} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <GroupActions group={row.original} />,
  },
];
