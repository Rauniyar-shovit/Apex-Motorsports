import React from "react";

function Banner({ bannerText }: { bannerText?: string }) {
  return (
    <section className="background-image">
      <div className="wrapper">
        <div
          className="
          inline-block bg-foreground text-white 
          [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]
         pl-20 xl:pl-0 pr-16 py-4  font-barlow font-extrabold uppercase
        text-2xl md:text-4xl lg:text-5xl tracking-wide  
        "
        >
          {bannerText}
        </div>
      </div>
    </section>
  );
}

export default Banner;
