
"use client"


// Proyectos.js
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
    speed: 8000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
  };

  return (
    <>
      <div className="bg-gray-300 h-1 mb-4 md:mb-8"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center my-4 lg:my-8 lg:items-stretch space-y-4 md:space-y-15">
        <div className="w-full lg:w-1/2 lg:pr-4 md:pr-8 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-8 text-black mb-2 md:mb-4 text-center">
            {work.name}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-80 mb-4 md:mb-8 text-center">
            {work.description}
          </p>

          <div className="flex items-center justify-center w-full mb-2 md:mb-4">
            <Image
              src="/githubb.svg"
              alt="Imagen de Git"
              width={20}
              height={20}
              className="mr-2 md:mr-4"
            />
            <Link
              href={work.url}
              className="bg-black text-white p-1 md:p-2 lg:p-2 rounded-full hover:scale-110 transition-transform w-16 md:w-20 text-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {work.button}
            </Link>
          </div>

          <motion.div
            className="w-full mt-2 md:mt-4 lg:mt-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="w-full  md:p-4 lg:p-6 rounded-lg shadow-md"
              style={{
                background: "rgba(0, 0, 0, 0.05)",
                padding: "5px",
    
              }}
            >
              <Slider
                {...sliderSettings}
                arrows={false}
                dots={false}
                centerMode={true}
                centerPadding="30px"
              >
                {work.images.map((image, index) => (
                  <div key={index} className="rounded-lg oerflow-hivdden">
                    <Image
                      src={image}
                      alt={`Imagen ${index}`}
                      width={300}
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
          className="w-full lg:w-1/2 md:mt-4 lg:mt-0 ml-0 lg:ml-4 h-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={work.coverImage}
            alt="Imagen del proyecto"
            layout="responsive"
            width={450}
            height={500}
            className="rounded-lg mg-6"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Proyectos;


