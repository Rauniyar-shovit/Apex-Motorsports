import { Alumni } from "@/models";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import PortableParagraphRender from "./PortableParagraph";

type BioProps = Pick<
  NonNullable<Alumni>,
  "profileImage" | "name" | "bio" | "email" | "linkedin"
>;

const Bio = ({ profileImage: image, name, bio, linkedin, email }: BioProps) => {
  console.log("🚀 ~ Bio ~ bio:", bio);
  const profileImage = urlFor(image!).url();

  return (
    <section className="section-padding wrapper font-sans flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      <Image
        src={profileImage}
        width={350}
        height={600}
        alt="name"
        className="max-w-[350px] max-h-[525px] object-cover"
      />
      <div className="max-w-md px-5 md:px-0">
        <p className="uppercase text-sm  font-[600] tracking-wider xl:mb-4 text-foreground">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl font-barlow uppercase  font-bold mb-4 text-primary">
          {name}
        </h1>

        <PortableParagraphRender value={bio} />
        <div className="flex items-center justify-start gap-4 mt-4">
          <a
            href={linkedin!}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href={`mailto:${email}`}
            className="text-primary hover:text-muted-primary"
          >
            <IoMail size={25} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bio;
