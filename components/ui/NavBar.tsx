"use client";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="px-6 py-3 border-b">
      <Link href="/" className="text-xl font-bold">
        PromptShare
      </Link>
    </nav>
  );
};

export default NavBar;
