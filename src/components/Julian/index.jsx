"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { saveAs } from 'file-saver';


const Julian = () => {


  const downloadPDF = async () => {
    try {
      const filePath = '/CV/FULL_STACK_DEVELOPER_JULIAN_BISCHOFF_CV.pdf';
      saveAs(filePath, 'FULL_STACK_DEVELOPER_JULIAN_BISCHOFF_CV.pdf');
    } catch (error) {
      console.error('Error al descargar el PDF:', error);
    }
  };
  return (
    <>
      {/* Primer contenedor */}
      <div  id="pdf-content" className="flex flex-col sm:flex-row items-center justify-between bg-white border-6 border-solid sm:p-0">
        {/* Sección de la imagen */}
        <motion.div className="w-full sm:w-1/2 m-0 p-0 mb-4 sm:mb-0 relative">
          <Image
            width={750}
            height={500}
            className="w-full h-auto sm:w-3/4 sm:h-auto opacity-80 bg-gray-800"
            src="/Imagen.jpg"
            alt="Tu Foto"
          />
        </motion.div>

        {/* Sección del texto y la flecha */}
        <motion.div
          className=" w-1/8 text-7xl mt-10 text-purple-300  hidden md:flex"
          //animacion para la flecha que venga de arriba}
          initial={{ opacity: 0, y: -350 }}
          animate={{ opacity: 1, y: -60 }}
          transition={{ duration: 2 }}
        >
          &#8595;
        </motion.div>



        <div className="w-full sm:w-1/2 ml-5 sm:ml-4 text-center sm:text-left">
  {/* Título y texto */}
  <motion.h1
    initial={{ opacity: 0, x: 350 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2 }}
    className="text-3xl sm:text-5xl font-bold mt-4 mb-2 sm:mb-6 sm:mt-0"
  >
    Hi, I'm Julian Bischoff
  </motion.h1>

  <h1 className="text-lg sm:text-2xl mb-2 p-2 sm:p-4 text-purple-300">
    Full Stack Developer
  </h1>

  <p className="text-lg sm:text-xl mb-4 p-2 sm:p-4">
    Welcome to my digital corner! Specialized in the creation of
    successful websites.
  </p>
  
  <motion.button
    className="bg-black text-white p-4 rounded-full hover:scale-105 transition-transform mt-2 sm:mt-4"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={downloadPDF}
  >
    Download CV
  </motion.button>
</div>


      </div>
    </>
  );
};
export default Julian;
