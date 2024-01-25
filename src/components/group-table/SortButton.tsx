"use client";
import { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { ReactNode } from "react";
import { Group } from "./columns";

type SortButtonProps = {
  column: Column<Group>;
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
