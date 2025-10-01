import Banner from "@/components/reusable/Banner";
import React from "react";

const Learnings = () => {
  return (
    <section className="mt-20 section-padding">
      <Banner bannerText="Learnings and Experience" />

      <div className=" wrapper  font-sans  lg:px-20 py-14 md:py-16   px-5 ">
        <p className="text-muted-primary mb-6">
          Working on different Formula SAE subsystems gave me a unique
          opportunity to bridge theoretical knowledge with practical
          application. From understanding the principles of composite structures
          to applying finite element analysis for validation, each project
          strengthened my technical foundation. I learned how design decisions
          influence not only performance but also safety, manufacturability, and
          cost, which pushed me to think beyond the CAD model and consider the
          full lifecycle of a component.
        </p>

        <p className="text-muted-primary">
          Beyond the technical skills, these experiences taught me how to work
          effectively in a fast-paced, collaborative environment. I developed
          problem-solving skills by adapting designs to real-world constraints,
          learned to communicate clearly with team members from different
          disciplines, and gained hands-on experience in manufacturing
          processes. These lessons not only improved my engineering abilities
          but also helped me grow as a team player, ready to take on challenges
          in both academic and professional settings.
        </p>
      </div>
    </section>
  );
};

export default Learnings;
