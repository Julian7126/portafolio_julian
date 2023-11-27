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
      <div  id="pdf-content" className="flex flex-col  sm:flex-row items-center justify-between bg-white border-6 border-solid sm:p-0">
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
          className=" w-1/8 flex text-7xl mt-10"
          //animacion para la flecha que venga de arriba}
          initial={{ opacity: 0, y: -350 }}
          animate={{ opacity: 1, y: -60 }}
          transition={{ duration: 2 }}
        >
          &#8595;
        </motion.div>
        <div className="w-full sm:w-1/2 ml-0 sm:ml-4">
          {/* Título y texto */}
          <motion.h1
            initial={{ opacity: 0, x: 350 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="text-4xl sm:text-8xl font-bold mb-2 justify-between p-2 sm:p-12"
          >
            Hi, Im Julian Bischoff
          </motion.h1>
          <p className="text-xl sm:text-2xl mb-4 justify-center p-2 sm:p-10 m-5">
            Welcome to my digital corner! Specialized for the creation of
            successful web sites.
          </p>
          <motion.button
            className="bg-black text-white p-4 rounded-full hover:scale-110 transition-transform ml-12"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
