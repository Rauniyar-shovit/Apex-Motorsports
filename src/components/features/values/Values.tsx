import Image from "next/image";
import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const features = [
  "Quick Registration",
  "Magnificent Locations",
  "Medical Attendance",
  "Drink Stations",
  "Comfortable Apparel",
  "Comfortable Apparel",
];
const Values = () => {
  return (
    <section id="values">
      <div className="pt-20 lg:pt-32 w-[90%] lg:w-[78%] 2xl:w-[50%] mx-auto">
        <div className="items-center flex flex-col h-145 2xl:h-160 ">
          <div className="flex-1 w-full h-full relative">
            {/* <div className="relative w-[75%] 2xl:w-[80%] h-full "> */}
            <div className="relative lg:w-[75%] h-full ">
              <Image
                src={"/value_1.avif"}
                alt="value"
                className="absolute w-full h-full object-cover"
                width={600}
                height={1000}
              />
            </div>
            <div className="absolute bottom-0 lg:-bottom-1/6 lg:-right-10 max-h-80 lg:max-h-none lg:min-h-106 lg:w-106 2xl:w-120 items-center justify-center  bg-foreground  p-4 lg:p-6 text-white shadow-2xl group">
              <div className="  p-6 2xl:p-10 flex flex-col justify-between cursor-pointer">
                <IoChatbubblesOutline className="h-15 w-15 mb-8 lg:mb-14" />
                <p className="font-sans text-muted-secondary  lg:text-lg mb-6 lg:mb-10">
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia. Quia voluptas sit
                  aspernatur aut odit aut fugit.
                </p>

                <FaArrowRightLong className="h-5 w-5 group-hover:scale-110 transition-all duration-200" />
              </div>
            </div>
          </div>

          <div className="flex-1 w-full h-full">
            <div className="lg:pl-15 flex flex-col justify-between h-full ">
              <p className="hidden lg:block text-lg font-sans text-muted-primary">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                Wuismod tempor incidunt
              </p>
              <div className="my-10 lg:mb-4">
                {features.map((item, index) => (
                  <p
                    key={index}
                    className="font-bold text-2xl lg:text-[2.8rem]  font-barlow text-gray-500 uppercase mb-1"
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

export default Values;
