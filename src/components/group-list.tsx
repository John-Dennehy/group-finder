import groupsTable, { GroupSelect } from "@/server/db/schema";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

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

type GroupCardProps = {
  group: GroupSelect;
};
function GroupCard({ group }: GroupCardProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="flex flex-row gap-2 justify-between text-xl">
          {group.name}
          <span className="text-gray-500 text-sm">
            {"Active: "}
            {group.active && <span className="text-green-500 text-xl">✓</span>}
            {!group.active && <span className=" text-xl">✗</span>}
          </span>
        </h3>
      </CardHeader>

      <CardContent>
        <p>{group.description}</p>
      </CardContent>
      <CardFooter>
        <p className="italic text-sm font-light text-gray-500 text-right w-full">
          id: {group.id}
        </p>
      </CardFooter>
    </Card>
  );
}