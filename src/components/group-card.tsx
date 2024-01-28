import { GroupSelect } from "@/server/db/schema";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type GroupCardProps = {
  group: GroupSelect;
};
export function GroupCard({ group }: GroupCardProps) {
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
