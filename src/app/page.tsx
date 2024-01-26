"use server";

import GroupList from "@/components/group-list";
import { db } from "@/server/db";
import groupsTable from "@/server/db/schema";

export const selectAllGroups = async () => {
  const groups = await db.select().from(groupsTable);
  return groups;
};

export default async function HomePage() {
  const groups = await selectAllGroups();

  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-4">
        <h1>Home</h1>

        <GroupList groups={groups} />
      </div>
    </main>
  );
}
