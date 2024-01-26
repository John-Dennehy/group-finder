"use server";

import GroupList from "@/components/group-list";
import { Button } from "@/components/ui/button";
import { db } from "@/server/db";
import groupsTable from "@/server/db/schema";
import Link from "next/link";

export default async function HomePage() {
  const groups = await db.select().from(groupsTable);

  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-4">
        <h1>Home</h1>
        <Button variant={"default"} asChild>
          <Link href={"/groups/"}>See Groups</Link>
        </Button>
      </div>
    </main>
  );
}
