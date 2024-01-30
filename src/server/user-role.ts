import { Role } from "@/types/globals";
import { auth, clerkClient } from "@clerk/nextjs";

export async function setUserRole(role: Role, userId: string) {
  // Update the user's metadata
  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: { role },
  });
}

export function getUserRole() {
  const { sessionClaims } = auth();
  const role = sessionClaims?.role as Role;

  return role;
}

