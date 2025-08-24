import React from "react";

const DarkPanel = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 space-y-12 bg-foreground text-white font-sans">
      {/* What We Do */}
      <div>
        <h3 className="uppercase font-barlow text-xl font-extrabold mb-3">
          What We Do
        </h3>
        <p className="text-white/80 leading-relaxed">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua enim ad.
        </p>
      </div>

      {/* The Opportunities */}
      <div>
        <h3 className="uppercase font-barlow text-xl font-extrabold mb-3">
          The Opportunities
        </h3>
        <p className="text-white/80 leading-relaxed">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua enim ad.
        </p>
      </div>
    </div>
  );
};

export default DarkPanel;
