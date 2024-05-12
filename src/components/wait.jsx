import Image from "next/image";
import React from "react";
import relax from "../../public/relax.jpg";

function Wait() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="absolute z-10 top-52 sm:top-28 text-2xl md:top-20 lg:text-3xl">
        Nada planificado aún
      </h1>
      <Image
        className="absolute"
        height={700}
        width={700}
        alt="imagen relax"
        src={relax}
      />
    </div>
  );
}

export default Wait;
