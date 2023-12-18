"use client";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AboutMe = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView1) {
      mainControls.start("visible");
      slideControls.start("hidden");
    }
    if (isInView2) {
      mainControls.start("visible");
      slideControls.start("hidden");
    }
  }, [isInView1, isInView2]);

  return (
    <div id="about" ref={ref1} className="relative flex flex-col lg:flex-row items-center justify-center h-auto">
    {/* Primer bloque de texto */}
    <div className="lg:w-1/2 p-6 md:p-9 bg-gray-200 rounded-md mb-4 lg:mr-4 md:mb-0">
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <motion.h2 className="text-xl lg:text-2xl text-center md:text-left">
          A passionate web developer with a mission to make technology as fun as it is functional.
        </motion.h2>
      </motion.div>
    </div>
  
    {/* Segundo bloque de texto */}
    <div ref={ref2} className="lg:w-1/2 p-6 md:p-5 bg-gray-200 rounded-md -mt-5 md:mt-0">
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        animate={mainControls}
      >
        <h2 className="text-xl lg:text-2xl text-center md:text-left">
          I love being able to create new things, face new challenges, and grow every day in this beautiful world of artists.
        </h2>
      </motion.div>
    </div>
  
    {/* Bloque de animación de slide */}
    <motion.div
      variants={{
        hidden: { right: "100%" },
        visible: { left: "0%" },
      }}
      initial="visible"
      animate={slideControls}
      transition={{ duration: 0.5, ease: easeIn }}
      style={{
        marginTop: "-20px",
        height: "200px",
        position: "absolute",
        top: "4px",
        bottom: "4px",
        left: "0",
        right: "0",
        background: "#E6E6FA",
        zIndex: 25,
        borderRadius: "12px",
      }}
    />
  </div>
  
  );
};

export default AboutMe;
