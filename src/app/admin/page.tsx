"use server";

import { GroupTable } from "@/components/group-table";
import NewGroupForm from "@/components/NewGroupForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
        <Card>
          <CardHeader>
            <h2>Create New Group</h2>
          </CardHeader>
          <CardContent>
            <NewGroupForm />
          </CardContent>
        </Card>
        <hr />
        <GroupTable />
      </div>
    </main>
  );
}
