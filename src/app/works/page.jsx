
import Proyectos from "@/components/Proyectos";
import React from "react";

const Work = () => {
  return (
    <div className="container mx-auto px-4">
    <div className="my-14">
        <h1 className="text-3xl text-left font-semibold pb-4">
          A little bit about my projects
        </h1>
        <div className="bg-purple-300 h-1"></div>
      </div>
    <Proyectos />

    </div>
  );
};

export default Work;
