import { Role } from "@/types/globals";
import { auth, clerkClient } from "@clerk/nextjs";

export function checkRole(role: Role) {
  const { sessionClaims } = auth();
  if (!sessionClaims) return false;

  return sessionClaims?.role === role;
}

export async function setRole(role: Role, userId: string) {
  // Update the user's metadata
  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: { role },
  });
}
