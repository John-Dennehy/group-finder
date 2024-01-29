import { Roles } from "@/types/globals";
import { auth } from "@clerk/nextjs";

export function checkRole(role: Roles) {
  const { sessionClaims } = auth();
  console.log("sessionClaims", sessionClaims);
  if (!sessionClaims) return false;

  return sessionClaims?.role === role;
}


export function isAdmin() {
  return checkRole("admin");
}