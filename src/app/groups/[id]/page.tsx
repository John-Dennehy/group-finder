"use server";

import { db } from "@/db";
import groupsTable from "@/db/schema/groups";
import { eq } from "drizzle-orm";

type GroupPageProps = {
  params: { id: string };
};

export default async function GroupPage({ params }: GroupPageProps) {
  const groupData = await db
    .select()
    .from(groupsTable)
    .where(eq(groupsTable.id, params.id));

  if (groupData.length === 0) {
    return <h1>Group not found</h1>;
  }

  return (
    <>
      <h1>Group {params.id}</h1>
      {groupData.map((group) => {
        return (
          <div key={group.id}>
            <p>Name: {group.name}</p>
            <p>Description: {group.description}</p>
            <p>Active: {group.active}</p>
          </div>
        );
      })}
    </>
  );
}
