"use client";
import Image from "next/image";
const Julian = () => {
    return (
        <>
          {/* Primer contenedor */}
          <div className="flex flex-col  sm:flex-row items-center justify-between bg-white border-6 border-solid sm:p-0">
            {/* Sección de la imagen */}
            <div className="w-full sm:w-1/2 m-0 p-0 mb-4 sm:mb-0 relative" >
              {/* Ajusta el ancho y la opacidad de la imagen */}
              <Image
                width={750}
                height={500}
                className="w-full h-auto sm:w-3/4 sm:h-auto opacity-80 bg-gray-800"
                src="/Imagen.jpg"
                alt="Tu Foto"
              />
            </div>
            
            {/* Sección del texto y la flecha */}
            <div className=" w-1/8 flex text-7xl mt-10">&#8595;</div>
            <div className="w-full sm:w-1/2 ml-0 sm:ml-4">

              {/* Título y texto */}
              <h1 className="text-4xl sm:text-8xl font-bold mb-2 justify-between p-2 sm:p-12">
                Hi, Im Julian Bischoff
              </h1>
              <p className="text-xl sm:text-2xl mb-4 justify-center p-2 sm:p-10 m-5">
                Welcome to my digital corner! Specialized for the creation of
                successful web sites.
              </p>
              {/* Flecha hacia abajo */}
            </div>
          </div>
        </>
      );
    }
export default Julian;
