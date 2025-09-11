"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Specs from "./_components/Specs";
import Banner from "@/components/reusable/Banner";

export default function Page() {
  return (
    <main>
      <section className="px-6 pt-16">
        <div className="font-sans max-w-4xl 2xl:max-w-5xl mx-auto text-center">
          <p className=" font-sans text-center  text-base md:text-lg leading-relaxed">
            The M22 is a lightweight, high-performance Formula SAE race car
            engineered with a carbon fibre monocoque chassis and advanced
            aerodynamic package for maximum downforce and efficiency. It runs on
            a Fischer Elektromotoren PMSM electric motor with a custom
            accumulator system, delivering strong continuous torque for
            competitive acceleration. With finely tuned suspension,
            driver-focused controls, and optimized mass distribution, the car is
            built to balance agility, speed, and reliability on track.
          </p>
        </div>
        <div className="mt-6 border-b-2 border-primary w-40 mx-auto" />
      </section>
      <section className="section-padding wrapper">
        <div>
          <Carousel className="sm:mx-12 md:mx-20 lg:mx-40">
            <CarouselContent>
              <CarouselItem>
                <div className="relative aspect-[16/9] overflow-hidden ">
                  <Image
                    src="/car-demo.jpg"
                    alt="Car 1"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="relative  aspect-[16/9] overflow-hidden ">
                  <Image
                    src="/car-demo.jpg"
                    alt="Car 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="relative aspect-[16/9] overflow-hidden ">
                  <Image
                    src="/car-demo.jpg"
                    alt="Car 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative  aspect-[16/9]  overflow-hidden ">
                  <Image
                    src="/car-demo.jpg"
                    alt="Car 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>

            <div className="mt-4 flex justify-center gap-4">
              <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0 size-9" />
              <CarouselNext className="static translate-x-0 translate-y-0 rotate-0 size-9" />
            </div>
          </Carousel>
        </div>
      </section>

      <section>
        <div className="mt-10">
          <Banner bannerText="Specifications" />
        </div>
        <Specs />
      </section>
    </main>
  );
}
