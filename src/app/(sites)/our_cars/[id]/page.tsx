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

export default function Page() {
  return (
    <main>
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
    </main>
  );
}
