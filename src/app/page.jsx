"use client";

import Julian from "@/components/Julian";
import Tecnologias from "@/components/Tecnologias";
import {motion, useInView ,useAnimation} from "framer-motion";
import React, {useEffect,useRef} from "react";


const Pages = () => {


  const ref = useRef(null);
  const isInView = useInView(ref ,{once:true});
  
  const mainControls = useAnimation();

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible");
    }
    console.log(isInView)

  },[isInView])





  return (
    
  

    <motion.div ref={ref}
    initial={{ opacity: 0, y:75}}
    animate={{ opacity: 1, y:50 }}
    transition={{ duration: 0.3 }}
    >
    <Julian/>
    <Tecnologias/>

      {/* Tercer contenedor */}
      <div className="p-4 bg-gray-400">
        {/* Aquí puedes implementar la lógica para subir y mostrar los enlaces de descarga de certificados */}
        {/* Por ejemplo, un formulario de carga de archivos */}
      </div>



      <motion.div ref={ref} 
      
      
      initial={{ opacity: 0, y:75}}
      animate={{ opacity: 1, y:50 }}
      transition={{ duration: 0.3 }}
      
      
      className="lorem-container">
        
    <p className="lorem-paragraph">
      Otro conjunto de texto de Lorem Ipsum para el segundo contenedor.
    </p>
    <p className="lorem-paragraph">
      Puedes ajustar el estilo de los párrafos y contenedores según tus necesidades.
    </p>
    <p className="lorem-paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
    </p>
    <p className="lorem-paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
    </p>
    <p className="lorem-paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
    </p>


    <div className="text-2xl">
    <p className="lorem-paragraph">
      Otro conjunto de texto de Lorem Ipsum para el segundo contenedor.   
    </p>
    <p className="lorem-paragraph">
      Puedes ajustar el estilo de los párrafos y contenedores según tus necesidades.
    </p>
    <p className="lorem-paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
    </p>   

  </div>

  </motion.div> 
  </motion.div>   
 
  );
};


export default Pages;
