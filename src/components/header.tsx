import { HeartHandshakeIcon } from "lucide-react";
import Link from "next/link";
import { UserButton, currentUser, SignInButton, useUser } from "@clerk/nextjs";

type HeaderProps = {
  title: string;
};

export default async function Header({ title }: HeaderProps) {
const user = useUser();

  return (
    <>
      <header className=" bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-4 m-0">
              <HeartHandshakeIcon className="h-10 w-10" />
              <h1 className="text-3xl font-bold">Group Finder</h1>
            </Link>

            {/* <nav className="hidden lg:flex gap-2">
              <Link className="hover:underline" href="#">
                Suggest new Group
              </Link>
              <Link className="hover:underline" href="#">
                Login
              </Link>
            </nav> */}

            <div className="flex flex-row gap-2 items-center">
              {user && (
                <>
                  <p className="align-middle">{`Welcome ${user.user?.firstName}`}</p>
                  <UserButton />
                </>
              )}
              {!user && <SignInButton />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
