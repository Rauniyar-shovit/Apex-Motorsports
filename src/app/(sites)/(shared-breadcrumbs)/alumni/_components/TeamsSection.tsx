"use client";

import { MemberProfile } from "@/models";
import ProfileCard from "./ProfileCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TeamSection({
  members,
  enableHoverOverlay = true,
  disableNavigation = false,
}: {
  members: MemberProfile[];
  enableHoverOverlay?: boolean;
  disableNavigation?: boolean;
}) {
  const checkMembersCount = members.length < 3;
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel>
        <CarouselContent
          className={`-ml-1 ${checkMembersCount ? "justify-center" : ""}`}
        >
          {members.map((member, i) => (
            <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ProfileCard
                  key={i}
                  {...member}
                  disableNavigation={disableNavigation}
                  enableHoverOverlay={enableHoverOverlay}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {!checkMembersCount && (
          <div className="mt-4 flex justify-center gap-4">
            <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0 size-9" />
            <CarouselNext className="static translate-x-0 translate-y-0 rotate-0 size-9" />
          </div>
        )}
      </Carousel>
    </div>
  );
}
