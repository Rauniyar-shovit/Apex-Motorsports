"use client";

import Image from "next/image";
import CompetitionInfo from "./CompetitionInfo";

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

            <div className="absolute bottom-3 -left-16 bg-primary  px-10 py-10 shadow-xl font-barlow">
              <p className="uppercase text-xl tracking-wider">Teams</p>
              <p className="mt-2 text-6xl font-extrabold leading-none font-barlow">
                700+
              </p>
            </div>

            <div className="absolute bottom-3 left-40 bg-foreground  px-10 py-10 shadow-xl font-barlow min-w-[180px]">
              <p className="uppercase text-xl tracking-wider">Countries</p>
              <p className="mt-2 text-6xl font-extrabold leading-none font-barlow">
                60+
              </p>
            </div>

            {/* <div className="absolute -bottom-10 left-6 bg-primary text-white px-8 py-6 shadow-xl">
              <p className="uppercase text-sm tracking-wide text-white/80 font-sans">
                Teams
              </p>
              <p className="mt-2 text-5xl font-extrabold leading-none font-barlow">
                700+
              </p>
               <p className="mt-2 text-white/80 text-sm">
                Adipiscing elit, do eiusmod.
              </p> 
            </div> */}

            {/* floating stat card — dark */}
            {/* <div className="absolute -bottom-10 right-6 bg-[#1b1b1b] px-8 py-6 w-[300px] shadow-xl">
              <p className="uppercase text-sm tracking-wide text-white/80">
                Runners registered
              </p>
              <p className="mt-2 text-5xl font-extrabold leading-none">400+</p>
              <p className="mt-2 text-white/70 text-sm">Sed eiusmod tempor.</p>
            </div> */}
          </div>
        </div>

        {/* mobile spacing so floating cards don’t overlap next section */}
        <div className="h-24 lg:hidden" />
      </div>
    </section>
  );
}
