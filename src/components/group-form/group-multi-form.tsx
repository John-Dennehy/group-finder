"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createPublicId } from "@/lib/create-public-id";
import { useEffect, useState } from "react";
import NewGroupForm from "./new-group-form";
import { NewScheduleForm } from "./new-schedule-form";

export default function GroupMultiForm() {

  const [groupId, setGroupId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const publicId = createPublicId();
    setGroupId(publicId);
  }, []);

  return (
    <>
      <div>
        {groupId && <p>Group ID: {groupId}</p>}
        <Tabs defaultValue="group">
          <TabsList>
            <TabsTrigger value="group">Group</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>
          <div className="min-h-[300px] ">
            <TabsContent value="group">
              <NewGroupForm groupId={groupId} />
            </TabsContent>
            <TabsContent value="schedule">
              <NewScheduleForm groupId={groupId} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
}