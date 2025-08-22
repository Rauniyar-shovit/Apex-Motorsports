import React from "react";
import MarqueeItem from "./MarqueeItem";

const Partners1 = () => {
  return (
    <div>
      <div className="container mx-auto">
        <MarqueeItem from={0} to={"-100%"} />
      </div>
    </div>
  );
};

export default Partners1;
