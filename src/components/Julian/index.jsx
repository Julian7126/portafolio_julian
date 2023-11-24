"use client";
import Image from "next/image";
const Julian = () => {
    return (
        <>
            {/* Primer contenedor */}
            <div className="flex items-center justify-between bg-white border-6 border-solid ">
                <div className="w-1/2  m-0 p-0">
                    {/* Ajusta el ancho y la opacidad de la imagen */}
                    <Image
                        width={750}
                        height={500}
                        className="w-3/4 h-auto opacity-80 bg-gray-800"
                        src="/Imagen.jpg"
                        alt="Tu Foto"
                    />
                </div>
                <div className="w-1/8 flex text-7xl mt-10">&#8595;</div>
                <div className="w-1/2 ml-4">
                    {/* Título y texto */}
                    <h1 className="text-8xl font-bold mb-2 justify-between p-12">
                        Hi, Im Julian Bischoff
                    </h1>
                    <p className="text-2xl mb-4 justify-center p-10 m-5">
                    Welcome to my digital corner! Specialized for the creation of
                    successful web sites.
                    </p>
                    {/* Flecha hacia abajo */}
                </div>
            </div>
        </>
    );
};

export default Julian;
