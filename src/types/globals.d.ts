// Create a type for the roles
export type Role = "admin" | "moderator" | "user";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role: Role;
    };
  }
}
