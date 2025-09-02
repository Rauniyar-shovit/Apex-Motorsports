import { TeamMemberProfile } from "@/models";
import Image from "next/image";
import React from "react";

const ProfileCard = ({ name, photo, role, bio }: TeamMemberProfile) => {
  return (
    <div className="group md:max-w-[260px] w-full">
      <div className="relative h-64 w-full overflow-hidden ">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="mt-4 ">
        <h3 className="text-[15px] font-semibold text-foreground ">{name}</h3>
        <p className="mt-1 text-sm text-muted-primary">{role}</p>
        <p className="mt-3 text-sm text-muted-primary ">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
