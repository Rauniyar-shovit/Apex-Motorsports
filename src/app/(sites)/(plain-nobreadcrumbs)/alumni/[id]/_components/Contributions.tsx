import Image from "next/image";
import React from "react";

const contributionsData = {
  id: 1,
  title: "Composite Monocoque",
  description:
    "The composite monocoque is the central structural chassis of the Formula SAE car, built using carbon-fiber reinforced polymer with a lightweight core material. Unlike a traditional spaceframe, the monocoque integrates the driver’s cockpit, suspension mounting points, and safety cell into a single shell. This design provides high torsional rigidity, reduced overall weight, and improved driver safety, while also allowing tighter packaging of components and enhanced aerodynamic efficiency.",
  image: "/race-finish.jpg",
  contributions:
    "My contributions focused on optimizing the laminate schedule and ply orientation to achieve the required stiffness-to-mass ratio, performing CAD surfacing to package the cockpit and bulkheads, and running FEA simulations to validate torsional stiffness. I assisted in the manufacturing stage with mold preparation, layup, and curing processes, and ensured compliance with FSAE safety standards such as firewall integrity, anti-intrusion zones, and harness mounting points. Through this work, I helped deliver a lightweight, reliable, and safe chassis that improved overall vehicle performance.",
};

export const Contributions = () => {
  return (
    <section>
      <div className="section-padding wrapper font-sans ">
        <p className="font-barlow text-5xl uppercase text-center mb-14">
          My Contributions
        </p>
        <div className="flex flex-col gap-15">
          {[0, 0, 0].map((_, i) => (
            <div key={i} className="lg:px-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left column: Title + Description */}
                <div
                  className={`
          ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}
        `}
                >
                  <h1 className="font-barlow text-2xl md:text-3xl uppercase">
                    {contributionsData.title}
                  </h1>
                  <p className="mt-3 text-muted-primary">
                    {contributionsData.description}
                  </p>
                </div>

                {/* Right column: Image */}
                <div
                  className={`w-full h-full aspect-[16/9] relative   ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <Image
                    src={contributionsData.image}
                    alt="race-finish"
                    fill
                    sizes="(min-width:1280px) 1024px, (min-width:1024px) 896px, (min-width:768px) 704px, 100vw"
                    className="object-cover "
                  />
                </div>
              </div>

              <div className="mt-8">
                <p className="text-muted-primary">
                  {contributionsData.contributions}
                </p>
              </div>
              <div className="mt-10 border-b-2 border-primary w-40 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
