import Image from "next/image";
import React from "react";

const AboutUs1 = () => {
  return (
    <section className=" bg-foreground section-padding">
      <div className="w-[90%] 2xl:w-[75%] 3xl:w-[55%] mx-auto  2xl:h-[80vh] 3xl:h-[70vh] py-20 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-5  gap-x-5 grid-rows-[0.5fr_1fr_1fr] md:grid-rows-2 justify-center items-center ">
          <div className=" text-muted-secondary font-sans max-w-lg mb-6 md:mb-10 xl:pl-10 col-span-2 text-center md:text-left md:self-end ">
            <p className="mt-10 md:m-0">
              Our purpose is to empower students to bridge the gap between
              theory and real-world engineering through hands-on design,
              collaboration, and problem-solving.
            </p>
            <p className=" text-white  mb-6  col-span-2 mt-10 text-2xl font-barlow font-[500] uppercase tracking-wider md:hidden">
              At Apex Motorsport, we believe in turning ambition into action.
            </p>
          </div>

          <div className="flex h-full col-span-2 md:col-span-3 col-start-1 row-start-1 md:row-start-2 justify-self-center  ">
            <div className="flex h-full flex-col justify-center md:justify-end">
              <h1 className="text-6xl md:text-8xl xl:text-[9rem] font-sans font-[500] text-white uppercase tracking-wider mb-10 leading-tight md:pl-10  self-end">
                About
                <br />
                <div className="flex items-center justify-center md:justify-start gap-3 px-4">
                  <div className="flex-1 h-[0.5px] bg-white hidden md:block "></div>
                  <span className="text-5xl  md:text-7xl tracking-wide text-primary ">
                    APEX
                  </span>
                </div>
              </h1>
            </div>
          </div>

          <Image
            src="/f1_cars.avif"
            alt="Unsplash example"
            width={800}
            height={600}
            className=" col-span-2 md:col-span-1 col-start-1 row-start-2 md:col-start-3 md:row-start-1 w-full h-full object-cover grayscale xl:pt-5 "
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />

          <Image
            src="/f1_cars.avif"
            alt="Unsplash example"
            width={800}
            height={600}
            className=" col-span-1 col-start-4 row-start-1 row-span-2 w-full h-full object-cover grayscale xl:pt-5 hidden md:block"
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />

          <div className="md:flex flex-col col-span-1 col-start-5 row-start-1 row-span-2 h-full w-full hidden ">
            <Image
              src="/f1_cars.avif"
              alt="Unsplash example"
              width={800}
              height={400}
              className="  w-full h-full object-cover  grayscale xl:pt-5"
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <p className=" text-white   mb-6  col-span-2 mt-10  font-barlow font-[500] uppercase tracking-wider   ">
              At Apex Motorsport, we believe in turning ambition into action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
