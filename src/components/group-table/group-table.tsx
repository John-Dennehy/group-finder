"use server";

import { db } from "@/server/db";
import groupsTable, { GroupSelect } from "@/server/db/schema";
import { columns } from "./columns";
import { DataTable } from "../data-table";

async function getData(): Promise<GroupSelect[]> {
  const groups = await db.select().from(groupsTable);
  return groups;
}

export default async function DemoPage() {
  const data = await getData();


  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}
