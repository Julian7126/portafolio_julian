
"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Proyectos = ({ work }) => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <>
      <div className="bg-gray-300 h-1 mb-8"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center my-8 lg:my-12 lg:items-stretch">
        <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col items-center">
          <h2 className="text-4xl font-bold leading-8 text-black mb-4 text-center">
            {work.name}
          </h2>
          <p className="text-lg text-black text-opacity-80 mb-8 text-center">
            {work.description}
          </p>

          <div className="flex items-center justify-center w-full  ">
            <Image
              src="/githubb.svg"
              alt="Imagen de Git"
              width={40}
              height={40}
              className="mr-4"
            />
            <Link href={work.url}
              className="bg-black text-white p-3 rounded-full hover:scale-110 transition-transform w-24 text-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {work.button}
            </Link>
          </div>

          <motion.div
  className="w-full lg:w-4/4 mt-4 lg:mt-0"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <div
    className="w-full p-4 m-6 rounded-lg shadow-md"
    style={{
      background: "#black",  // Cambia el color de fondo según tus preferencias
      padding: "20px",        // Ajusta el relleno según tus preferencias
    }}
  >
    <Slider
      {...sliderSettings}
      arrows={false}
      dots={false}
      centerMode={true} 
      centerPadding="60px"  
    >
      {work.images.map((image, index) => (
        <div key={index} className="rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={`Imagen ${index}`}
            width={400}
            height={200}
            className="rounded-lg"
          />
        </div>
      ))}
    </Slider>
  </div>
</motion.div>



        </div>

        <motion.div
          className="w-full lg:w-1/2 mt-4 lg:mt-0 ml-8 h-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={work.coverImage}
            alt="Imagen del proyecto"
            width={675}
            height={400}
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Proyectos;
