"use server";

import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
// import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AdminLayoutProps = {
  children: React.ReactNode;
  groups: React.ReactNode;
  users: React.ReactNode;
};

export default async function AdminLayout({ groups, users }: AdminLayoutProps) {
  // If the user does not have the admin role, redirect them to the home page

  if (!checkRole("admin")) {
    redirect("/");
  }

  return (
    <div className="container mx-auto my-4">
      <p>This page is restricted to users with the &quot;admin&quot; role</p>

      <div className="flex flex-col gap-4">
        <Accordion type="multiple">
          <AccordionItem value="groups">
            <AccordionTrigger>Groups</AccordionTrigger>
            <AccordionContent>{groups}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="users">
            <AccordionTrigger>Users</AccordionTrigger>
            <AccordionContent>{users}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}