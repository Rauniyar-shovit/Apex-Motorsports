"use client";
import
  {
    VerticalTimeline
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CarProfileCard from "./_component/CarProfileCard";
const OurCars = () => {
  return (
    <div className="wrapper section-padding">
      <div className="md:px-20 lg:px-30 xl:px-0">
        <VerticalTimeline lineColor="#171717" layout={"2-columns"}>
          <CarProfileCard />
          <CarProfileCard />
          <CarProfileCard />
          <CarProfileCard />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default OurCars;
