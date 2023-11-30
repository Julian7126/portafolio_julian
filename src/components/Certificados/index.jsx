"use client"
import Link from "next/link";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Certificados = () => {


  const ref= useRef(null);
  const isInView = useInView(ref, { once: true} );
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
  
    }
  }, [isInView]);

  

  const certificadosData = [
    { id: 1, title: "Web Development", src: "/desarrolloweb.jpg", link: "https://latam.coderhouse.com/certificados/62fecc40cc367b0024226179?lang=es" },
    { id: 2, title: "JavaScript", src: "/javascript.jpg", link: "https://latam.coderhouse.com/certificados/633b61418453fd000e9f73c3?lang=es" },
    { id: 3, title: "React.js", src: "/react.jpg", link: "https://www.coderhouse.es/certificados/63a6efdfc5708d000e6de53f" },
    { id: 4, title: "Back-end", src: "/react.jpg", link: "https://example.com/backend" },
  ];

  return (
    <>

      <br />
      <h2 className="text-center mb-4 text-3xl p-1 sm:text-4xl md:text-5xl lg:text-4xl font-bold text-purple-700">
        My Certificates
      </h2>

      <div  className="container mx-auto flex justify-center">
        <motion.div  ref={ref}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 75 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1 , delay: 0.1 }}
          className  ="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 items-center w-full border-6  rounded-md"
      
        >  
          {certificadosData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-full overflow-hidden shadow-lg rounded-md flex flex-col items-center my-8 m-3 bg-gray-200"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={ 400}
                height={100}
                className="mx-auto w-full h-64 object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <Link href={item.link}>
                  <button className="text-violet-500">Learn more</button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    

    </>
  );
};

export default Certificados;
