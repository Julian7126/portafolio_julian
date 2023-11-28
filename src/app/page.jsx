"use client";

import AboutMe from "@/components/AboutMe";
import Julian from "@/components/Julian";
import Social from "@/components/Social";
import Tecnologias from "@/components/Tecnologias";
import { motion } from "framer-motion";


const Pages = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref ,{once:true});

  // const mainControls = useAnimation();

  // useEffect(()=>{
  //   if(isInView){
  //     mainControls.start("visible");
  //   }
  //   console.log(isInView)

  // },[isInView])

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


    </motion.div>
  );
};

export default Pages;
