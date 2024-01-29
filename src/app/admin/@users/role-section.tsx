"use client";

import { Badge } from "@/components/ui/badge";
import { Role } from "@/types/globals";

type RoleSectionProps = {
  userId: string;
  role: string;
};

export function RoleSection({ role }: RoleSectionProps) {
  // TODO add server action to update user role
  const handleRoleChange = (newRole: Role) => {
    alert(newRole);
  };

  return (
    <div className="flex flex-row gap-2">
      <p>Role:</p>

      <Badge
        variant={!role ? "default" : "outline"}
        onClick={() => handleRoleChange("user")}
      >
        User
      </Badge>
      <Badge
        variant={role === "admin" ? "default" : "outline"}
        onClick={() => handleRoleChange("admin")}
      >
        Admin
      </Badge>
    </div>
  );
}
