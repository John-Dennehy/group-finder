"use server";

import selectAllGroups from "@/db/queries/selectAllGroups";
import { DataTable } from "../data-table";
import { columns } from "./columns";

export default async function DemoPage() {
  const data = (await selectAllGroups()) || [];

  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}
