
"use client"


import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Proyectos = ({ work }) => {
  return (
    <>
      <div className="bg-purple-300 h-1 mb-8"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center my-8 lg:my-12 lg:items-stretch">
        <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col items-center">
          <h2 className="text-4xl font-bold leading-8 text-black mb-4 text-center">
            {work.name}
          </h2>
          <p className="text-lg text-black text-opacity-80 mb-8 text-center">
            {work.description}
          </p>

          <div className="flex items-center justify-center w-full">
            <Image
              src="/githubb.svg"
              alt="Imagen de Git"
              width={80}
              height={80}
              className="mr-4"
            />
            {/* <Link href={work.url}
              className="bg-black text-white p-3 rounded-full hover:scale-110 transition-transform w-24"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              CODE
            </Link> */}
          </div>
        </div>

        <motion.div
          className="w-full lg:w-1/2 mt-4 lg:mt-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={work.coverImage}
            alt="Imagen del proyecto"
            width={639}
            height={377}
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Proyectos;
