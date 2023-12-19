"use client"

import { motion } from 'framer-motion';

const Saludo = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full h-[100px]  mt-8 justify-center"
    >
      <motion.div variants={textVariants} className="flex w-3/4 justify-center items-center">
        <h1 className="text-xl font-bold">
          You can send me an e-mail, so we can get in touch as soon as possible.
        </h1>
      </motion.div>
    </motion.div>
  );
};


export default Saludo;