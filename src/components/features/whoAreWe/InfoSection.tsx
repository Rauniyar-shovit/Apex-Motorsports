import React from "react";

const InfoSection = () => {
  return (
    <div className=" md:col-span-2 px-6 lg:px-8 py-14 lg:py-20 font-sans boder  xl:pl-[10vw] 2xl:pl-[12vw] 3xl:pl-[20vw] ">
      <div className=" max-w-[890px]">
        <p className="uppercase text-sm  font-[600] tracking-wider">
          RUNNING WORKOUTS
        </p>

        <h2 className="mt-2 font-barlow text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight uppercase xl:mr-[30%]">
          OUR NEW RUNNING PROGRAMS FOR MARATHON RUNNERS
        </h2>

        <p className="mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted-primary xl:ml-[35%]">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt
          explicabo nemo.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
