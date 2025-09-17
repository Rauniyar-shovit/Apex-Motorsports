"use client";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CarProfileCard from "./_component/CarProfileCard";
const OurCars = () => {
  return (
    <div className="wrapper section-padding">
      <div className="md:px-20  xl:px-0">
        <VerticalTimeline lineColor="#171717" layout={"2-columns"}>
          <CarProfileCard
            date="2024"

            title="Electric E40"
            subtitle="High-downforce electric platform for endurance and sprints."
            imageSrc="/car-demo.jpg"
            // tags={["Aero", "Powertrain", "Suspension"]}
            specs={[
              { label: "Powertrain", value: "Dual PMSM · 120 kW · RWD" },
              {
                label: "Aerodynamics",
                value: "Splitter · Diffuser · Rear Wing",
              },
              { label: "Suspension", value: "Double Wishbone · ARBs" },
              { label: "Chassis", value: "Carbon Monocoque · Roll Structure" },
            ]}
            ctaText="View Details"
            ctaHref="/cars/e40"
            aspect="tall"
          />

          <CarProfileCard
            date="2023"
            title="Electric E40"
            subtitle="High-downforce electric platform for endurance and sprints."
            imageSrc="/car-demo.jpg"
            specs={[
              { label: "Powertrain", value: "Dual PMSM · 120 kW · RWD" },
              {
                label: "Aerodynamics",
                value: "Splitter · Diffuser · Rear Wing",
              },
              { label: "Suspension", value: "Double Wishbone · ARBs" },
              { label: "Chassis", value: "Carbon Monocoque · Roll Structure" },
            ]}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default OurCars;
