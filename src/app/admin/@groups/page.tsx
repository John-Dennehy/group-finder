"use server";

import { DrawerDialog } from "@/components/drawer-dialog";
import GroupMultiForm from "@/components/group-form/group-multi-form";
import { GroupTable } from "@/components/group-table";

export default async function GroupAdminPage() {
  return (
    <>
      <div className="flex flex-col gap-4 py-4">
        <DrawerDialog title="Create New Group" description="Create a new group">
          <GroupMultiForm />
        </DrawerDialog>

        <hr />
        <GroupTable />
      </div>
      <div className="py-4" />
    </>
  );
}
