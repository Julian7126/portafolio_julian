"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


async function loadProyects() {
  const response = await fetch('http://localhost:3000/api/proyects')
  const data = await response.json()
  console.log(data)
  return data

}
 




const Proyectos = () => {

loadProyects()
  



  return (
    <>
  
      <div className="flex flex-col lg:flex-row items-center justify-start">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <h2 className="text-4xl font-bold leading-8 text-black mb-4">
            TITULO DEL PROYECTO
          </h2>
          <p className="text-lg text-black text-opacity-80 mb-8">
            The main objective is to provide an online platform where the
            company can showcase its services and projects in a professional and
            effective way.
          </p>

          <div className="flex items-center">
            <Image
              src="/githubb.svg"
              alt="Imagen de Git"
              width={80}
              height={80}
              className="mr-4"
            />
            <motion.button
              className="bg-black text-white p-3 rounded-full hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Code
            </motion.button>
          </div>
        </div>

        <motion.div
          className="w-full lg:w-1/2 mt-4 lg:mt-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={"/fsgruposcreen.png"}
            alt="Imagen de Git"
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
