"use client"
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
    <div id="about" ref={ref1} className="relative flex items-center justify-center h-25 ">
      <div  className="flex-grow text-center text-black max-w-2xl p-12 bg-gray-200 rounded-md mr-4 h-35">
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <motion.h2 className="text-2xl">
            A passionate web developer with a mission:
            
             to make technology as fun as it is functional.
          </motion.h2>
        </motion.div>
      </div>

      {/* Segundo bloque de texto */}
      <div ref={ref2} className="flex-grow text-center text-black max-w-2xl p-8 bg-gray-200 rounded-md h-35">
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          initial="hidden"
          animate={mainControls}
        >
          <h2 className="text-2xl">
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
          height: 200,
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#E6E6FA",
          zIndex: 25,
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

export default AboutMe;






















