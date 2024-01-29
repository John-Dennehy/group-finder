"use server";

import { clerkClient } from "@clerk/nextjs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { unstable_noStore } from "next/cache";
import { RoleSection } from "./role-section";

export default async function AdminUsers() {
  unstable_noStore(); // disable caching

  const users = await clerkClient.users.getUserList({
    // orderBy: "-created_at",
    // limit: 10,
    // query: "role",
  });
  console.log(users);

  return (
    <>
      <h3 className="py-4 font-bold">Users:</h3>
      <div className="flex flex-row flex-wrap gap-4">
        {users.map((user) => {
          const role = user.publicMetadata.role as string;

          return (
            <Card key={user.id} className="w-96 grow">
              <CardHeader className="flex flex-row justify-between">
                <CardTitle>
                  {user.firstName} {user.lastName}
                </CardTitle>
                <div>
                  {user.hasImage && (
                    <Image
                      src={user.imageUrl}
                      alt={"User image"}
                      width={36}
                      height={36}
                    />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row gap-2">
                  <p>ID:</p>
                  {user.id}
                </div>
                <div className="flex flex-row gap-2">
                  <p>Username:</p>
                  {user.username}
                </div>

                <RoleSection role={role} userId={user.id} />

                <div className="flex flex-row gap-2">
                  <p>Email:</p>
                  <ol>
                    {user.emailAddresses.map((email) => {
                      return (
                        <li key={email.id} className="flex flex-row gap-2">
                          {email.emailAddress}
                          {email.verification?.status === "verified" ? (
                            <span className="text-green-500">✅</span>
                          ) : (
                            <span className="text-red-500">❌</span>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </div>
                <div className="flex flex-row gap-2">
                  <p>Phone:</p>
                  {user.phoneNumbers.map((phone) => phone.phoneNumber)}
                </div>
                <div className="flex flex-row gap-2">
                  <p>Meta Data:</p>
                  {JSON.stringify(user.publicMetadata)}
                </div>

                <div className="flex flex-row gap-2">
                  <p>Birthday:</p>
                  {user.birthday}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
