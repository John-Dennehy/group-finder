import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewGroupForm from "./new-group-form";
import { NewScheduleForm } from "./new-schedule-form";

export default function GroupMultiForm() {
  return (
    <div>
      <Tabs defaultValue="group">
        <TabsList>
          <TabsTrigger value="group">Group</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>
        <TabsContent value="group">
          <NewGroupForm />
        </TabsContent>
        <TabsContent value="schedule">
          <NewScheduleForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}