import { HeartHandshakeIcon } from "lucide-react";
import Link from "next/link";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <header className=" bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-4 m-0">
              <HeartHandshakeIcon className="h-10 w-10" />
              <h1 className="text-3xl font-bold">Group Finder</h1>
            </Link>
            <nav className="hidden lg:flex gap-2">
              <Link className="hover:underline" href="#">
                Suggest new Group
              </Link>
              <Link className="hover:underline" href="#">
                Login
              </Link>
            </nav>
            {/* <Sheet className="lg:hidden">
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Suggest new Group
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Login
              </Link>
            </div>
          </SheetContent>
        </Sheet> */}
          </div>
        </div>
      </header>
    </>
  );
}
