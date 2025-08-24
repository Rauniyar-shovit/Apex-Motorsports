import { QuoteInfo } from "@/models";

export default function WhoWeAreQuote({ quote, author, position }: QuoteInfo) {
  return (
    <div className="wrapper text-center section-padding font-sans">
      {/* Eyebrow */}
      <p className="mb-4 text-sm font-[600] tracking-[0.18em]  uppercase">
        Who we are
      </p>

      {/* Big headline */}
      <h1
        className="
            uppercase leading-[1.05] font-barlow
            text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem]
            max-w-[900px] mx-auto
          "
      >
        {quote}
      </h1>

      {/* Author / role */}
      <div className="mt-10 text-primary">
        <p className="text-xl font-semibold tracking-wide font-barlow uppercase ">
          {author}
        </p>
        <p className="mt-2 text-sm text-muted-primary">{position}</p>
      </div>
    </div>
  );
}
