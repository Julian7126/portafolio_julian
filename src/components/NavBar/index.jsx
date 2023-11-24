"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full h-93 flex-shrink-0 flex items-center px-8">
      {/* Div para "jb" */}
      <div className="flex-shrink-0">
        <Link
          href="/"
          className="text-black font-dm-sans font-bold text-6xl leading-120 tracking-tight"
        >
          jb.
        </Link>
      </div>

      {/* Div para las navegaciones */}
      <div className="flex-grow h-60 flex items-center space-x-10 justify-end">
        <Link
          href="/works"
          className="text-black font-dm-sans font-semibold text-2xm"
        >
          WORKS
        </Link>
        <a
          href="/aboutme"
          className="text-black font-dm-sans font-semibold text-2xm"
        >
          ABOUT ME
        </a>
        <Link
          href="/contact"
          className="text-black font-dm-sans font-semibold text-2xm"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
