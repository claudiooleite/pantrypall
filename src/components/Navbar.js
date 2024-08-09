"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const linkClasses = (path) =>
    pathname === path ? "text-orange-300" : "text-white";

  return (
    <nav className="fixed bottom-0 w-full bg-black rounded-t-xl p-4 flex justify-around items-center">
      <Link href="/" className={`p-2 rounded-full ${linkClasses("/")}`}>
        <span className="material-icons-outlined">home</span>
      </Link>
      <Link
        href="/search"
        className={`p-2 rounded-full ${linkClasses("/search")}`}>
        <span className="material-icons-outlined">search</span>
      </Link>
      <Link
        href="/favorites"
        className={`p-2 rounded-full ${linkClasses("/favorites")}`}>
        <span className="material-icons-outlined">favorite</span>
      </Link>
      <Link
        href="/pantry"
        className={`p-2 rounded-full ${linkClasses("/pantry")}`}>
        <span className="material-icons-outlined">kitchen</span>
      </Link>
    </nav>
  );
};

export default Navbar;
