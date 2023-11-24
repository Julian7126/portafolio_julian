"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-50 md:h-93 flex-shrink-0 flex items-center px-8">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-black font-dm-sans font-bold text-6xl leading-120 tracking-tight">
          jb.
        </Link>
      </div>

      {/* Navegación para dispositivos móviles */}
      <div className="md:hidden flex items-center ml-auto">
        <button onClick={toggleMenu} className="text-black font-dm-sans font-semibold text-2xl focus:outline-none">
          MENU
        </button>
      </div>

      {/* Navegación para web */}
      <div className="hidden md:flex-grow md:h-60 md:flex md:items-center md:space-x-10 md:justify-end">
        <Link href="/works" className="text-black font-dm-sans font-semibold text-2xl">
          WORKS
        </Link>
        <a href="/aboutme" className="text-black font-dm-sans font-semibold text-2xl">
          ABOUT ME
        </a>
        <Link href="/contact" className="text-black font-dm-sans font-semibold text-2xl">
          CONTACT
        </Link>
      </div>

      {/* Menú modal para dispositivos móviles */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white w-full h-full p-8 rounded-md">
            {/* Botón para cerrar el menú */}
            <button onClick={toggleMenu} className="text-black text-2xl focus:outline-none">
              &#x2716; {/* Icono de X */}
            </button>

            {/* Enlaces del menú modal */}
            <div className="flex flex-col space-y-4 ">
              <Link href="/works" className="text-black text-2xl">
                WORKS
              </Link>
              <Link href="/aboutme" className="text-black text-2xl">
                ABOUT ME
              </Link>
              <Link href="/contact" className="text-black text-2xl">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;