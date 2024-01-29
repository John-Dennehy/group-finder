"use client";

import { Button } from "@/components/ui/button";
import { GroupSelect } from "@/server/db/schema/groups_schema";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ActiveCell } from "../data-table/cell-active";
import { CellDateTime } from "../data-table/cell-date-time";
import { ColumnHeader } from "../data-table/column-header";
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
        <Button variant={"link"} asChild className="px-0">
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
