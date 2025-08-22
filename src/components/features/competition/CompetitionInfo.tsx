import React from "react";

const CompetitionInfo = () => {
  return (
    <div className="mr-16">
      <p className="uppercase font-sans font-[600] tracking-widest  text-sm">
        Formula SAE
      </p>

      <h1 className="mt-4 font-barlow text-4xl md:text-5xl leading-tight uppercase">
        Bringing <span className="text-primary">industry</span>
        <br />
        into the <span className="text-primary">classroom</span>
      </h1>

      <p className="mt-8 max-w-4xl leading-8 font-sans text-muted-secondary">
        Formula SAE is an international competition where students design,
        build, and race Formula-style cars. Since 2000 it has brought together
        35+ teams each December, helping students gain technical, leadership,
        and business skills valued by industry. With Combustion, Electric, and
        Driverless classes tested in Static and Dynamic events, it is the
        ultimate showcase of engineering education and innovation.
      </p>

      <button className="font-sans font-[600] text-sm mt-10 inline-block border border-white px-8 py-4 uppercase tracking-widest hover:bg-white hover:text-black transition cursor-pointer">
        Learn More
      </button>
    </div>
  );
};

export default CompetitionInfo;
