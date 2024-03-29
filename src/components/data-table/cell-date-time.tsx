"use client";

import { Cell } from "@tanstack/react-table";
import { HTMLAttributes } from "react";
import { formatDateTime } from "../../lib/formatDateTime";

export type RowDateTimeProps<TData, TValue> = HTMLAttributes<HTMLDivElement> & {
  cell: Cell<TData, TValue>;
  date?: Date;
};

export function CellDateTime<TData, TValue>({
  cell,
}: RowDateTimeProps<TData, TValue>) {
  let formattedDate = "";
  const columnId = cell.column.id as keyof TData;
  const cellValue = cell.row.original[columnId];

  if (cellValue instanceof Date) formattedDate = formatDateTime(cellValue);

  return <div className="flex justify-left">{formattedDate}</div>;
}
