"use client";

import Julian from "@/components/Julian";
import Tecnologias from "@/components/Tecnologias";


const Pages = () => {
  return (
    <>
<Julian/>
<Tecnologias/>

      {/* Tercer contenedor */}
      <div className="p-4 bg-gray-400">
        {/* Aquí puedes implementar la lógica para subir y mostrar los enlaces de descarga de certificados */}
        {/* Por ejemplo, un formulario de carga de archivos */}
      </div>
    </>
  );
};


export default Pages;
