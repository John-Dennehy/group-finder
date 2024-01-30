import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1>Testing!</h1>
      <SignIn />
    </div>
  );
}
