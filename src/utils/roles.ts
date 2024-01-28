import { Roles } from "@/types/globals";
import { currentUser } from "@clerk/nextjs";

export async function checkRole(role: Roles) {
  const user = await currentUser();

  return user?.publicMetadata.role === role;
}
