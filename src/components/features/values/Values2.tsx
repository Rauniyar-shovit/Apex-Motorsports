import Image from "next/image";
import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const features = [
  "Magnificent Locations",
  "Medical Attendance",
  "Drink Stations",
  "Comfortable Apparel",
  "Comfortable Apparel",
];
const Values = () => {
  return (
    <section id="values">
      <div className="pt-32 lg:w-[78%] 2xl:w-[50%] mx-auto">
        <div className="items-center flex flex-col md:flex-row gap-20 h-145 2xl:h-160 ">
          <div className="flex-1 h-full relative">
            <div className="relative w-[75%] 2xl:w-[80%] h-full ">
              <Image
                src={"/value_1.avif"}
                alt="value"
                className="absolute w-full h-full object-cover"
                width={600}
                height={1000}
              />
            </div>
            <div className="absolute -bottom-1/6 -right-10 min-h-106 w-106 2xl:w-120 items-center justify-center  bg-foreground  p-6 text-white shadow-2xl group">
              <div className="  p-6 2xl:p-10 flex flex-col justify-between cursor-pointer">
                <IoChatbubblesOutline className="h-15 w-15 mb-14" />
                <p className="font-sans text-muted-secondary text-lg mb-10">
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia. Quia voluptas sit
                  aspernatur aut odit aut fugit.
                </p>

                <FaArrowRightLong className="h-5 w-5 group-hover:scale-110 transition-all duration-200" />
              </div>
            </div>
          </div>

          <div className="flex-1 h-full">
            <div className="pl-15 flex flex-col justify-between h-full">
              <p className="text-lg font-sans text-muted-primary">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                Wuismod tempor incidunt
              </p>
              <div className="mb-4">
                {features.map((item, index) => (
                  <p
                    key={index}
                    className="text-[2.8rem] font-bold font-barlow text-gray-500 uppercase mb-1"
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
