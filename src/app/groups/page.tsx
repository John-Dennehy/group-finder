"use server";

import GroupList from "@/components/groups-list";
import { selectAllGroups } from "@/db/queries/selectAllGroups";

export default async function GroupsPage() {
  const groups = (await selectAllGroups()) || [];

  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-4">
        <GroupList groups={groups} />
      </div>
    </main>
  );
}
