import { db } from "@/db"
import { groups, selectGroupSchema } from "@/db/schema"

export default async function AdminPage() {
  const result = await db.select().from(groups)

  //  validate response with zod
  const data = selectGroupSchema.safeParse(result)
  console.log(data)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg text-primary">Root Admin Page</h1>
      {/* <NewGroupModal /> */}
      {/* <pre>{JSON.stringify(res, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* <ul className="mx-auto flex flex-wrap gap-2">
        {data.map((group, index) => (
          <li key={index}>
            Group Details
            <pre>{JSON.stringify(group, null, 2)}</pre>
          </li>
        ))}
      </ul> */}
    </div>
  )
}
