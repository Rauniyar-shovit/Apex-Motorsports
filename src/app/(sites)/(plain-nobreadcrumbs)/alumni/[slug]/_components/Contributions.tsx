import { Alumni } from "@/models";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import PortableParagraphRender from "./PortableParagraph";

type ContributionsProps = Pick<NonNullable<Alumni>, "Contributions">;

export const Contributions = ({
  Contributions: ContributionsArray,
}: ContributionsProps) => {
  return (
    <section>
      <div className="section-padding wrapper font-sans ">
        <p className="font-barlow text-5xl uppercase text-center mb-14">
          My Contributions
        </p>
        <div className="flex flex-col gap-15 px-5">
          {ContributionsArray?.map((contributionItem, i) => {
            const image = urlFor(contributionItem.image!).url();
            return (
              <div key={i} className="lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                  {/* Left column: Title + Description */}
                  <div
                    className={`
          ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}
        `}
                  >
                    <h1 className="font-barlow text-2xl md:text-3xl uppercase mb-3">
                      {contributionItem.systemTitle}
                    </h1>
                    <PortableParagraphRender
                      value={contributionItem.systemDescription}
                    />
                  </div>

                  {/* Right column: Image */}
                  <div
                    className={`w-full h-full aspect-[16/9] relative   ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <Image
                      src={image}
                      alt={
                        contributionItem.image?.alt ??
                        contributionItem.systemTitle ??
                        ""
                      }
                      fill
                      sizes="(min-width:1280px) 1024px, (min-width:1024px) 896px, (min-width:768px) 704px, 100vw"
                      className="object-cover "
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <PortableParagraphRender
                    value={contributionItem.myContribution}
                  />
                </div>
                <div className="mt-10 border-b-2 border-primary w-40 mx-auto" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
