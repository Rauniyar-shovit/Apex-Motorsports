import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";

const values = [
  "Communication",
  "Growth",
  "Innovation",
  "Collaboration",
  "Ambition",
];

const Values_1 = () => {
  return (
    <section id="values">
      <div className="pt-20 md:pt-24 xl:pt-32 w-[90%] xl:w-[78%] 2xl:w-[65%] 3xl:w-[55%] mx-auto">
        <div className=" flex flex-col md:flex-row lg:gap-6 md:h-[560px] xl:h-[695px]">
          <div className="flex-1 w-full h-full">
            <div className="flex flex-col md:flex-1 relative w-full h-full">
              {/* Image div */}
              <div className="relative w-full md:w-[75%] h-[620px] md:h-[450px] xl:h-[585px] top-0 left-0">
                <Image
                  src={"/value_1.avif"}
                  alt="value"
                  className="absolute w-full h-full "
                  width={1000}
                  height={1200}
                />
              </div>

              {/* overlay card div */}
              <div className="absolute bottom-0 md:right-0 md:w-[80%] lg:w-[75%] bg-foreground  p-4 md:p-6 text-white shadow-2xl group">
                <div className="p-4 lg:p-6 2xl:p-10 flex flex-col justify-between cursor-pointer">
                  <IoChatbubblesOutline className="h-15 w-15 mb-8 lg:mb-10 xl:mb-14" />
                  <p className="font-sans text-muted-secondary  lg:text-lg mb-6 lg:mb-6">
                    Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia. Quia
                    voluptas sit aspernatur aut odit aut fugit.
                  </p>

                  <FaArrowRightLong className="h-5 w-5 group-hover:scale-110 transition-all duration-200 mb-4 md:mb-6 lg:mb-0" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full h-full mt-3 md:mt-0 ">
            <div className="md:pl-8 lg:pl-15 flex flex-col  h-full justify-between">
              <p className="hidden md:block text-lg font-sans text-muted-primary">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                Wuismod tempor incidunt
              </p>

              <div className="my-4 md:my-10 ">
                {values.map((item, index) => (
                  <p
                    key={index}
                    className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem]  font-barlow text-gray-500 uppercase mb-1 lg:mb-3"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values_1;
