import Button from "@/components/reusable/Button";
import { Car } from "lucide-react";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const CarProfileCard = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "transparent",
        color: "#fff",
        padding: 0,
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid #171717" }}
      date="2024"
      dateClassName="text-foreground font-barlow !text-xl -mt-2"
      iconClassName="bg-primary text-white"
      icon={<Car />}
    >
      {/* Card wrapper */}
      <div className=" overflow-hidden bg-neutral-900 ring-1 ring-neutral-800 shadow-md font-sans">
        {/* Responsive image */}
        <div className="relative h-60 w-full">
          <Image
            src="/car-demo.jpg"
            alt="car-demo"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 80vw,
                   1000px"
          />
        </div>

        <div className="p-3 sm:p-4 md:p-5">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold font-barlow uppercase">
            Electric E40
          </h3>

          <p className="mt-1 !text-xs text-neutral-300">
            A brand-new purpose-built platform designed for high performance and
            innovation.
          </p>

          {/* Car Specifications */}
          <div className="mt-5 grid grid-cols-2 gap-4 text-neutral-200">
            <div className="text-xs">
              <h4 className="font-semibold text-white">Powertrain</h4>
              <p className="!text-xs ">V6 · 650 hp · RWD</p>
            </div>
            <div className="text-xs">
              <h4 className="font-semibold text-white">Aerodynamics</h4>
              <p className="!text-xs">Splitter · Diffuser · Rear wing</p>
            </div>
            <div className="text-xs">
              <h4 className="font-semibold text-white">Suspension</h4>
              <p className="!text-xs">Double wishbone · Anti-roll bars</p>
            </div>
            <div className="text-xs">
              <h4 className="font-semibold text-white">Chassis</h4>
              <p className="!text-xs ">Carbon monocoque · Roll structure</p>
            </div>
          </div>

          {/* View Details Button */}

          <Button
            btnTextStyles=" !m-0  !font-[600] !text-xs"
            btnStyles={
              "border border-white bg-foreground hover:text-foreground px-8 py-3  tracking-widest text-white  !mt-6 "
            }
            beforeStyles={"before:bg-background "}
            title={"View Details"}
          />
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default CarProfileCard;
