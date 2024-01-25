"use server";

import { db } from "@/server/db";
import groupsTable from "@/server/db/schema";
import { Group, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Group[]> {
  const groups = await db.select().from(groupsTable);
  return groups;
}

export default async function DemoPage() {
  const data = await getData();

  return <DataTable columns={columns} data={data} />;
}
