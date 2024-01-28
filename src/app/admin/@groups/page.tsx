"use server";

import { DrawerDialog } from "@/components/drawer-dialog";
import { GroupTable } from "@/components/group-table";
import NewGroupForm from "@/components/new-group-form";

export default async function GroupAdminPage() {
  return (
    <>
      <div className="flex flex-col gap-4 py-4">
        <DrawerDialog
          title="Create New Group"
          description="Create a new group"
          form={<NewGroupForm />}
        />

        <hr />
        <GroupTable />
      </div>
      <div className="py-4" />
    </>
  );
}
