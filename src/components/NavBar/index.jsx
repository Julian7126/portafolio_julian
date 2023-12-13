"use client";
import Link from "next/link";
import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline';


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
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
            onClick={toggleMenu}
            style={{ zIndex: 1000 }}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-black w-full h-full p-8 rounded-sm flex flex-col items-start justify-between"
              onClick={(e) => e.stopPropagation()}
              style={{ position: "absolute", zIndex: 1000 }}
            >
              {/* Botón para cerrar el menú */}
              <button
                onClick={toggleMenu}
                className="text-white text-2xl focus:outline-none self-end"
              >
                &#x2716; {/* Icono de X */}
              </button>
              <motion.div
                className="text-black-200 text-2xl w-full h-[200px] flex items-center justify-center rounded-lg shadow-md p-4 bg-gradient-to-r from-violet-200 via-violet-500 to-violet-800"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Suspense fallback={<div>Loading...</div>} >
                  <Spline scene="https://prod.spline.design/kqQrUhfnyhg7Zcnj/scene.splinecode" />
                </Suspense>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid gap-4"
              >
                <Link
                  onClick={toggleMenu}
                  href="/"
                  className="text-white text-2xl"
                >
                  HOME
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/works"
                  className="text-white text-2xl"
                >
                  WORKS
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/#aboutme"
                  className="text-white text-2xl"
                >
                  ABOUT ME
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/contact"
                  className="text-white text-2xl"
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
