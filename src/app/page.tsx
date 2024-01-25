import GroupList, { Group } from "@/components/GroupList";
import NewGroupForm from "@/components/NewGroupForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  const groups: Group[] = [];

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
