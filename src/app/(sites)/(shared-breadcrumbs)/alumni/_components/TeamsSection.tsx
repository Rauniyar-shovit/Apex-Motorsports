"use client";

import ProfileCard from "./ProfileCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Lucy Madins",
    role: "Photographer",
    experience: "5 years of experience",
    image: "/team-model.avif", // replace with actual image
    socials: {
      linkedin: "#",
      email: "#",
      youtube: "#",
    },
  },
  {
    name: "Helena Farse",
    role: "Professional guide",
    experience: "10 years of experience",
    image: "/team-model2.avif",
    socials: {
      linkedin: "#",
      email: "#",
      youtube: "#",
    },
  },
  {
    name: "Dan Pitts",
    role: "Professional guide",
    experience: "5 years of experience",
    image: "/team-model3.avif",
    socials: {
      linkedin: "#",
      email: "#",
      youtube: "#",
    },
  },
  {
    name: "Dan Pitts",
    role: "Professional guide",
    experience: "5 years of experience",
    image: "/team-model3.avif",
    socials: {
      linkedin: "#",
      email: "#",
      youtube: "#",
    },
  },
  {
    name: "Dan Pitts",
    role: "Professional guide",
    experience: "5 years of experience",
    image: "/team-model3.avif",
    socials: {
      linkedin: "#",
      email: "#",
      youtube: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel>
        <CarouselContent className="-ml-1">
          {teamMembers.map((member, i) => (
            <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ProfileCard key={i} {...member} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-4 flex justify-center gap-4">
          <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0 size-9" />
          <CarouselNext className="static translate-x-0 translate-y-0 rotate-0 size-9" />
        </div>
      </Carousel>
    </div>
  );
}
