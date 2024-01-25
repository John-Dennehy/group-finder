"use client";
import { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { ReactNode } from "react";
import { GroupSelect } from "@/server/db/schema";

type SortButtonProps = {
  column: Column<GroupSelect>;
  children: ReactNode;
};

export function SortButton({ column, children }: SortButtonProps) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
