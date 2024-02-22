"use server";

import { db } from "@/db";

export async function selectAllGroups() {
const data = await db.query.groupsTable.findMany({
  columns: {
    id: true,
    name: true,
    description: true,
    active: true,
  },
  with: {
    schedule: true,
    locations: true,
    contactDetails: true,
    attendeeTypes: {
      columns: {
        filterType: true,
      },
      with: {
        attendeeType: {
          columns: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    },
  },
});

return data;
}
