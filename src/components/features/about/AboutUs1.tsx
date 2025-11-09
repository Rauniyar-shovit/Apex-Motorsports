"use client";
import RevealWrapper from "@/components/reusable/RevealWrapper";
import { useInView } from "motion/react";
import { useRef } from "react";
import ImageReveal from "./ImageReveal";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

const AboutUs1 = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  const containerSizeCenter =
    "w-[90%] 2xl:w-[75%] 3xl:w-[55%] mx-auto  2xl:h-[80vh] 3xl:h-[70vh] ";
  const responsiveGrid =
    "grid grid-cols-2 md:grid-cols-5  gap-x-5 grid-rows-[0.5fr_1fr_1fr] md:grid-rows-2";
  return (
    <section ref={sectionRef} className=" bg-foreground section-padding">
      <div
        className={`${containerSizeCenter} py-20 flex items-center justify-center`}
      >
        <div className={`${responsiveGrid} justify-center items-center `}>
          <div className="text-muted-secondary font-sans max-w-lg mb-6 md:mb-10 xl:pl-10 col-span-2 text-center md:text-left md:self-end justify-self-center md:justify-self-start">
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
              <RevealWrapper
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                isInView={isInView}
              >
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
              </RevealWrapper>
            </div>
          </div>

          {isMobile ? (
            <Image
              src={"/engineering-kart.avif"}
              alt={"engineering kart"}
              width={800}
              height={600}
              className={`col-span-2 col-start-1 row-start-2 w-full h-full object-cover grayscale xl:pt-5 `}
              sizes="100vw"
            />
          ) : (
            <ImageReveal
              isInView={isInView}
              wrapperStyles="col-span-2 md:col-span-1 col-start-1 row-start-2 md:col-start-3 md:row-start-1 w-full h-full"
              imgSrc={"/engineering-kart.avif"}
              imageAltText={"engineering kart"}
            />
          )}

          <ImageReveal
            isInView={isInView}
            wrapperStyles="col-span-1 col-start-4 row-start-1 row-span-2 w-full h-full hidden md:block"
            imgSrc={"/blog.jpg"}
            imageAltText={"blog"}
          />

          <div className="md:flex flex-col col-span-1 col-start-5 row-start-1 row-span-2 h-full w-full hidden ">
            <ImageReveal
              isInView={isInView}
              imgSrc={"/mclaren-f1-car.webp"}
              wrapperStyles="w-full h-full"
              imageAltText={"mclaren f1 car"}
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
