"use client";

type MapEmbedProps = {
  lat: number;
  lng: number;
  zoom?: number;
  q?: string;
  rounded?: boolean;
};

export default function MapEmbed({
  lat,
  lng,
  zoom = 13,
  q,
  rounded = true,
}: MapEmbedProps) {
  // Always use `q` form to show a marker
  const src = q
    ? `https://www.google.com/maps?q=${encodeURIComponent(
        q
      )}&z=${zoom}&output=embed`
    : `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div
      className={`relative w-full h-[40vh] md:h-[50vh] lg:h-[55vh] xl:h-[70vh] 3xl:h-[55vh] ${
        rounded ? "rounded-lg overflow-hidden" : ""
      } bg-gray-200`}
    >
      <iframe
        title="Google Map"
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
