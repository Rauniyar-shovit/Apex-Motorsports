"use client";
import { Achievement } from "@/models";
import raceTrack from "../../../../public/race-track.jpg";
import Card from "./Card";
import ParallaxContainer from "./ParallaxContainer";

const AchievementsClient = ({
  achievements,
}: {
  achievements: Achievement[];
}) => {
  return (
    <section className="pt-12 lg:pt-20">
      <ParallaxContainer bgImagePath={raceTrack} bgImageTitle={"race track"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-between gap-5 md:gap-8 xl:gap-5 h-full  wrapper ">
          {achievements.map((item, index) => (
            <Card
              key={item._id}
              {...item}
              index={index}
            />
          ))}
        </div>
      </ParallaxContainer>
    </section>
  );
};

export default AchievementsClient;
