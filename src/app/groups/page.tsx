"use server";

import GroupList from "@/components/groups-list";
import { db } from "@/server/db";
import groupsTable from "@/server/db/schema";

export default async function GroupsPage() {
  const groups = await db.select().from(groupsTable);

  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-4">
        <GroupList groups={groups} />
      </div>
    </main>
  );
}
