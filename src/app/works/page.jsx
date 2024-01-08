"use client"

import { motion } from 'framer-motion';
import Proyectos from '@/components/Proyectos';
import ProyectsData from '../../../data.js';

const Work = () => {
  const works = ProyectsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="container mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.5 }} // Ajusta el valor de retraso según sea necesario
    >
      <motion.div className="my-16 m-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-2xl md:text-1xl lg:text-1xl text-left h-2">A little bit about my projects</h1>
      </motion.div>

      {works.map((work) => (
        <motion.div key={work.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Proyectos work={work} />
        </motion.div>
      ))}
      <br />
    </motion.div>
  );
};

export default Work;