import Image from "next/image";
import React from "react";

const BuildTheFuture = () => {
  return (
    // <section className="section-padding wrapper">
    //   <div className="grid grid-cols-5 grid-rows-3 gap-y-8 p-4 items-center justify-center px-20">
    //     <div className="flex items-center justify-center col-span-2">
    //       <p className="font-sans font-[600] text-9xl uppercase">build</p>
    //     </div>
    //     <div className="flex items-center justify-center col-start-2  col-span-2 row-start-2">
    //       <p className="font-sans font-[600] text-9xl uppercase">the </p>
    //     </div>
    //     <div className="flex items-center justify-center col-start-3  col-span-3 row-start-3">
    //       <p className="font-sans font-[600]  text-9xl uppercase">future</p>
    //     </div>
    //   </div>
    // </section>
    <section className="section-padding wrapper">
      <p className="mb-10   mt-10 text-2xl font-barlow font-[500] uppercase tracking-wider text-center max-w-2xl mx-auto">
        a student-led engineering organisation that mirrors the processes of
        industry leaders in design, manufacturing, and systems integration.
      </p>
      <div className="grid grid-cols-5 grid-rows-3  p-4 items-center justify-center px-20">
        {/* <div className="flex flex-col items-center justify-center  bg-white text-center"> */}
        <h1 className="text-9xl font-extrabold uppercase text-transparent bg-[url('/bg-parallax.jpg')] bg-cover bg-center bg-clip-text font-sans col-span-3 justify-self-center ">
          Build
        </h1>{" "}
        <h1 className="text-9xl font-extrabold uppercase text-transparent bg-[url('/bg-parallax.jpg')] bg-cover bg-center bg-clip-text font-sans col-span-3 col-start-2 row-start-2 justify-self-center">
          the
        </h1>
        <h1 className="text-9xl font-extrabold uppercase text-transparent bg-[url('/bg-parallax.jpg')] bg-cover bg-center bg-clip-text font-sans col-span-3 col-start-3 row-start-3 justify-self-center">
          Future
        </h1>
        <div className="font-sans col-span-2 col-start-4 ">
          Our members collaborate across mechanical, electrical, software, and
          business divisions, handling concept generation, CAD modelling,
          testing, data analysis, and project delivery.
        </div>
        <div className="font-sans col-span-2 row-start-3 col-start-1 border-primary ">
          Using tools like PTC Creo, ANSYS, MATLAB, Windchill, Altium, and
          Ubuntu, we integrate real-world engineering workflows that promote
          teamwork, accountability, and innovation across all disciplines.
        </div>
      </div>
    </section>
  );
};

export default BuildTheFuture;
