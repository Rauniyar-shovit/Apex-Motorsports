import { Alumni } from "@/models";
import React from "react";
import PortableParagraphRender from "./PortableParagraph";
type StoryProps = Pick<NonNullable<Alumni>, "myStory">;

const Story = ({ myStory }: StoryProps) => {
  return (
    <section className=" font-sans bg-foreground">
      <div className="section-padding wrapper">
        <div className={` font-sans lg:px-20 py-14 md:py-16   px-5 `}>
          <p className="uppercase text-sm  font-[600] tracking-wider xl:mb-4 text-white">
            My story
          </p>

          <h2 className="mt-2 font-barlow text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-primary uppercase ">
            at apex motorsport
          </h2>

          <div className="mt-3 md:mt-6 text-base lg:text-lg leading-7 md:leading-8 text-muted-primary ">
            <PortableParagraphRender value={myStory} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
