"use server";

import { DrawerDialog } from "@/components/drawer-dialog";
import { GroupTable } from "@/components/group-table";
import NewGroupForm from "@/components/new-group-form";

export default async function AdminPage() {
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
