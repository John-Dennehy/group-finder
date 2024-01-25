"use server";

import { DrawerDialog } from "@/components/drawer-dialog";
import { GroupTable } from "@/components/group-table";
import NewGroupForm from "@/components/new-group-form";
import { db } from "@/server/db";
import groupsTable from "@/server/db/schema";

export const selectAllGroups = async () => {
  const groups = await db.select().from(groupsTable);
  return groups;
};

export default async function AdminPage() {
  const groups = await selectAllGroups();

  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-4">
        <h1>Admin Page</h1>

        <DrawerDialog
          title="Create New Group"
          description="Create a new group"
          form={<NewGroupForm />}
        />

        <hr />
        <GroupTable />
      </div>
      <div className="p-4" />
    </main>
  );
}
