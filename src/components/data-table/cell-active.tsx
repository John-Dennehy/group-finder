"use client";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export type ActiveCellProps = {
  active: boolean;
};

export function ActiveCell({ active }: ActiveCellProps) {
  return (
    <div className="flex justify-left pl-4">
      {active && <CheckCircledIcon className="h-6 w-6 text-green-500" />}
      {!active && <CrossCircledIcon className="h-6 w-6 text-red-500" />}
    </div>
  );
}
