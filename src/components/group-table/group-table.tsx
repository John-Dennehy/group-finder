"use server";

import { columns } from "./columns";
import { DataTable } from "../data-table";
import selectAllGroups from "@/server/db/queries/selectAllGroups";

export default async function DemoPage() {
  const data = (await selectAllGroups()) || [];

  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}
