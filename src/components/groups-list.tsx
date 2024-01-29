import { Group } from "@/db/schema/groups_schema";
import Link from "next/link";
import { GroupCard } from "./group-card/group-card";

type GroupListProps = {
  groups: Group[];
};

export function GroupList({ groups }: GroupListProps) {
  if (groups.length > 0) {
    return (
      <div className="flex flex-col gap-4 py-4">
        <ul className="flex flex-col gap-2">
          {groups.map((group) => (
            <li key={group.id}>
              <GroupCard group={group} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // If there are no groups to display, show a message
  return (
    <div className="flex flex-col gap-4 py-4">
      <p className="text-gray-500 text-center">
        There are no groups to display. Maybe you could
        <Link href="/groups/new" className="text-blue-500">
          {" "}
          create one
        </Link>
      </p>
    </div>
  );
}

export default GroupList;
