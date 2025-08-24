// components/WhoWeAreQuote.tsx
export default function WhoWeAreQuote() {
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
        {/* Training, races, and charity
        <br className="hidden md:block" />
        marathons for professional athletes
        <br className="hidden md:block" />
        and active amateur runners. */}
        students who engineer, collaborate, and compete to define the future of
        motorsport.
      </h1>

      {/* Author / role */}
      <div className="mt-10">
        <p className="text-xl font-semibold tracking-wide font-barlow uppercase">
          Peter Bowman
        </p>
        <p className="mt-2 text-sm text-gray-500">Team Principal</p>
      </div>
    </div>
  );
}
