import groupsTable, { GroupSelect } from "@/server/db/schema";
import { GroupCard } from "./group-card";

type GroupListProps = {
  groups: GroupSelect[];
};

export function GroupList({ groups }: GroupListProps) {
  return (
    <div className="flex flex-col gap-4 py-4">
      {/* if list is empty, display a short message instead of a list  */}
      {groups.length === 0 && <p>No groups found...</p>}
      {/* if list is not empty, display a list of groups */}
      {groups.length > 0 && (
        <ul className="flex flex-col gap-2">
          {groups.map((group) => (
            <li key={group.id}>
              <GroupCard group={group} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GroupList;
