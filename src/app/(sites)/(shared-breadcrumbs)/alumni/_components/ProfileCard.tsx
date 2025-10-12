import { AlumniPreview } from "@/models";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ProfileCard = ({
  profileImage,
  name,
  role,
  slug,
  experience,
  linkedin,
  email,
}: AlumniPreview) => {
  const image = urlFor(profileImage!).url();
  return (
    <div className="flex flex-col items-center text-center font-sans group">
      {/* Whole card links to alumni detail page */}
      <Link href={`/alumni/${slug}`} className="flex items-center flex-col">
        <div className="relative mb-4">
          <Image
            src={image}
            alt={name!}
            width={300}
            height={500}
            className="object-cover  max-w-[300px] max-h-[450px]"
          />
          <div className="absolute  inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-white h-full w-full flex justify-center items-center">
              Read My Story
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-muted-primary mt-1">
          {role} | {experience}
        </p>
      </Link>

      {/* Socials stay outside so they’re clickable */}
      <div className="flex items-center justify-center gap-4 mt-4">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin size={22} />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-primary hover:text-muted-primary"
          >
            <IoMail size={25} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
