"use client";
import Image from "next/image";
import CompetitionInfo from "./CompetitionInfo";
import CountUp from "@/components/CountUp";

export default function FormulaSAE() {
  return (
    <section className="relative section-padding">
      <div className="bg-foreground text-white">
        <div className="wrapper  max-w-7xl py-16 lg:py-24 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: copy */}
          <CompetitionInfo />

          {/* RIGHT: image + floating stat cards */}
          <div className="relative ">
            <div className="relative aspect-[16/11] w-full overflow-hidden ">
              <Image
                src="/formula-sae.jpg" // put your image here
                alt="Runner"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute bottom-3 -left-16 bg-primary  px-10 py-10 shadow-xl font-barlow min-w-[190px]">
              <p className="uppercase text-xl tracking-wider">Teams</p>
              <p className="mt-2 text-6xl font-extrabold leading-none font-barlow">
                <CountUp from={0} to={700} />+
              </p>
            </div>

            <div className="absolute bottom-3 left-40 bg-foreground  px-10 py-10 shadow-xl font-barlow min-w-[180px]">
              <p className="uppercase text-xl tracking-wider">Countries</p>
              <p className="mt-2 text-6xl font-extrabold leading-none font-barlow">
                60+
              </p>
            </div>
          </div>
        </div>

        {/* mobile spacing so floating cards don’t overlap next section */}
        <div className="h-24 lg:hidden" />
      </div>
    </section>
  );
}
