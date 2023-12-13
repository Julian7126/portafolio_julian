"use client"
import AboutMe from "@/components/AboutMe";
import Certificados from "@/components/Certificados";
import Julian from "@/components/Julian";
import Social from "@/components/Social";
import Tecnologias from "@/components/Tecnologias";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <Julian />
          <Tecnologias />
          <AboutMe/>
          <Social/>
          <Certificados/>
    
    
        </motion.div>
      );
}

export default Home 