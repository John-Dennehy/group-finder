import { ColumnDef } from "@tanstack/react-table";
import { zodSelectGroupSchema } from "@/server/db/schema";

export const columns: ColumnDef<typeof zodSelectGroupSchema>[] = [
  {
    accessorKey: "",
    header: "",
  },
];
