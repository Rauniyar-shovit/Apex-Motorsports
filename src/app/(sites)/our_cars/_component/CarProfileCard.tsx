// components/cards/CarProfileCard.tsx
"use client";

import { Car as CarIcon } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Button from "@/components/reusable/Button";

type Spec = { label: string; value: string };

type CarProfileCardProps = {
  /** Timeline date badge (e.g., "2024"). Hidden if not provided */
  date?: string;
  /** Card title (e.g., "Electric E40") */
  title: string;
  /** Short subtitle or blurb under the title */
  subtitle?: string;
  /** Hero image */
  imageSrc: string;
  imageAlt?: string;
  /** Optional chips/pills above specs */
  tags?: string[];
  /** Key specs rendered as a grid */
  specs: Spec[];
  /** CTA button text + action or link */
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  /** Override the timeline icon */
  icon?: ReactNode;
  /** Visual theme for the card body */
  theme?: "dark" | "light";
  /** Image aspect presets */
  aspect?: "tall";
  /** Extra class names for outer card */
  className?: string;
};

export default function CarProfileCard({
  date = "2024",
  title,
  subtitle = "A purpose-built platform focused on performance and innovation.",
  imageSrc,
  imageAlt = "car",
  tags = [],
  specs,
  ctaText = "View Details",
  ctaHref,
  onCtaClick,
  icon,
  theme = "dark",
  className = "",
}: CarProfileCardProps) {
  const isDark = theme === "dark";

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "transparent",
        color: "var(--foreground)",
        padding: 0,
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid #171717" }}
      date={date}
      dateClassName="text-foreground font-barlow !text-xl !md:-mt-2"
      iconClassName={"bg-primary text-white"}
      icon={<CarIcon />}
    >
      {/* Card wrapper */}
      <div
        className={`
          "overflow-hidden shadow-md font-sans bg-foreground text-white 
          ${className}
      `}
      >
        {/* Responsive image */}
        <div className={`relative w-full  aspect-[4/3] sm:aspect-[3/2]`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 80vw,
                   1000px"
            priority={false}
          />
        </div>

        {/* Content */}
        <div className="p-7 ">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold font-barlow uppercase">
            {title}
          </h3>

          {subtitle && (
            <p
              className={`mt-1 text-xs ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
            >
              {subtitle}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className={`text-[10px] sm:text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-200
                `}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Specs */}
          {specs?.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-4">
              {specs.map((s) => (
                <div key={s.label} className="text-xs">
                  <h4 className={`font-semibold "text-white"`}>{s.label}</h4>
                  <p className="!text-xs">{s.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}

          <div className="mt-6">
            <Button
              title={ctaText}
              btnTextStyles=" !m-0  !font-[600] !text-xs"
              btnStyles={
                "border border-white bg-foreground hover:text-foreground px-8 py-3  tracking-widest text-white  !mt-6 "
              }
              beforeStyles={"before:bg-background "}
            />
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}
