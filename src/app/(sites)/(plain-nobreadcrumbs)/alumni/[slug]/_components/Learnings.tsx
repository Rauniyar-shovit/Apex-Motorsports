import Banner from "@/components/reusable/Banner";
import React from "react";
import PortableParagraphRender from "./PortableParagraph";
import { Alumni } from "@/models";

type LearningProps = Pick<NonNullable<Alumni>, "learningsAndExperience">;

const Learnings = ({ learningsAndExperience }: LearningProps) => {
  return (
    <section className="mt-20 section-padding">
      <Banner bannerText="Learnings and Experience" />

      <div className=" wrapper  font-sans  lg:px-20 py-14 md:py-16   px-5 ">
        <PortableParagraphRender value={learningsAndExperience} />
      </div>
    </section>
  );
};

export default Learnings;
