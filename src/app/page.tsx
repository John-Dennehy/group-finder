"use server";

import GroupList, { Group } from "@/components/GroupList";
import NewGroupForm from "@/components/NewGroupForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { db } from "@/server/db";
import groupsTable from "@/server/db/schema";

export const selectAllGroups = async () => {
  const groups = await db.select().from(groupsTable);
  return groups;
};

export default async function Home() {
  // TODO: fetch groups from server

  const groups = await selectAllGroups();

  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-4">
        <h1>Home</h1>
        <Card>
          <CardHeader>
            <h2>New Group</h2>
          </CardHeader>
          <CardContent>
            <NewGroupForm />
          </CardContent>
        </Card>
        <div className="  ">
          <GroupList groups={groups} />
        </div>
      </div>
    </main>
  );
}
