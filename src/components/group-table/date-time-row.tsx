"use client";
import { formatDateTime } from "../../lib/formatDateTime";
import { RowDateTimeProps } from "./columns";

export function DateTimeRow({ dateValue: rowValue }: RowDateTimeProps) {
  if (!rowValue) {
    return <div className="font-medium text-center">-</div>;
  }
  const formattedDate = formatDateTime(rowValue);
  return <div className="font-medium text-left">{formattedDate}</div>;
}
