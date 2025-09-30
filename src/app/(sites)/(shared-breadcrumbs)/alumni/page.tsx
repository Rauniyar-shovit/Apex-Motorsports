import raceTrack from "@/../../public/race-track.jpg";
import ParallaxContainer from "@/components/features/achievements/ParallaxContainer";
import TeamSection from "./_components/TeamsSection";

const page = () => {
  return (
    <>
      <section className="px-6 py-16">
        <div className="font-sans max-w-4xl 2xl:max-w-5xl mx-auto text-center">
          <p className="uppercase text-sm font-[600] tracking-wider mb-4 ">
            CELEBRATING OUR LEGACY
          </p>
          <p className=" font-sans text-center  text-base md:text-lg leading-relaxed">
            Our alumni are the heart of Apex Motorsport’s story. They carried
            the lessons of teamwork, innovation, and resilience beyond the track
            and into their professional careers. Each achievement they’ve earned
            continues to inspire current and future members, reminding us that
            the Apex legacy never stops growing.
          </p>
        </div>
        <div className="mt-6 border-b-2 border-primary w-40 mx-auto" />
      </section>
      <ParallaxContainer
        bgImagePath={raceTrack}
        bgImageTitle={"race track"}
        containerStyles="h-[40vh] 3xl:h-[35vh]"
      >
        <div className="wrapper flex items-center justify-center text-center uppercase text-6xl font-barlow h-full">
          Meet Our Alumnis
        </div>
      </ParallaxContainer>

      <section className="mt-20">
        <div className="section-padding wrapper font-sans">
          <TeamSection />
        </div>
      </section>
    </>
  );
};

export default page;
