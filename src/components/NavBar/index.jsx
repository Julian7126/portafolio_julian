"use client";
import Link from "next/link";
import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-9 md:h-16 flex-shrink-0 flex items-center p-8">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 1.5 }}
        className="flex-shrink-0 mx-auto p-4 mt-10 hidden md:flex"
      >
        <Link
          href="/"
          className="text-black font-dm-sans font-bold text-6xl leading-120 tracking-tight"
        >
          jb
          <span className="bg-purple-300 text-transparent bg-clip-text">.</span>
        </Link>
      </motion.div>

      {/* Navegación para dispositivos móviles */}
      <div className="md:hidden flex items-center ml-auto">
        <motion.button
          whileHover={{ scale: 4.1 }}
          whileTap={{ scale: 2 }}
          onClick={toggleMenu}
          className="text-violet-800 text-4xl focus:outline-none mt-20"
        >
          ☰
        </motion.button>
      </div>

      {/* Navegación para web */}
      <div className="hidden md:flex-grow md:h-60 md:flex md:items-center md:space-x-10 md:justify-end mt-20">
        {/* Ajusta los márgenes y el espaciado según sea necesario */}
        <Link
          href="/works"
          className="text-black font-dm-sans font-semibold text-6xm ml-4"
        >
          WORKS
        </Link>
        <Link
          href="/#about"
          className="text-black font-dm-sans font-semibold text-6xm ml-4"
        >
          ABOUT ME
        </Link>
        <Link
          href="/contact"
          className="text-black font-dm-sans font-semibold text-6xm ml-4"
        >
          CONTACT
        </Link>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 bottom-0  w-full h-full bg-black "
            onClick={toggleMenu}
            style={{ zIndex: 1000 }}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-black w-full h-full p-2 rounded-sm flex flex-col "
              onClick={(e) => e.stopPropagation()}
              style={{ position: "absolute", zIndex: 1000 }}
            >
              {/* Botón para cerrar el menú */}
              <button
                onClick={toggleMenu}
                className="text-white text-5xl focus:outline-none self-end mr-5 mt-2"
              >
                &#x2716; {/* Icono de X */}
              </button>
        
             
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid gap-28 justify-center items-center mt-20"
              >
                <Link
                  onClick={toggleMenu}
                  href="/"
                  className="text-white text-5xl"
                >
                  HOME
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/works"
                  className="text-white text-5xl"
                >
                  WORKS
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/#aboutme"
                  className="text-white text-5xl"
                >
                  ABOUT ME
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/contact"
                  className="text-white text-5xl"
                >
                  CONTACT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
