import Button from "@/components/Reusable/Button";
import { FORMULA_SAE_DETAILS } from "@/constants";

const CompetitionInfo = () => {
  return (
    <div className="lg:mr-16">
      <p className="uppercase font-sans font-[600] tracking-widest  text-sm">
        {FORMULA_SAE_DETAILS.name}
      </p>

      <h1 className="mt-4 font-barlow text-4xl md:text-5xl leading-tight uppercase whitespace-pre-line">
        {FORMULA_SAE_DETAILS.motto.text.split(" ").map((word, idx) => {
          const lower = word.toLowerCase();
          const isHighlight =
            FORMULA_SAE_DETAILS.motto?.highlights?.includes(lower);
          return (
            <span key={idx} className={isHighlight ? "text-primary" : ""}>
              {word}{" "}
            </span>
          );
        })}
      </h1>

      <p className="mt-8 max-w-4xl leading-8 font-sans text-muted-secondary">
        {FORMULA_SAE_DETAILS.description}
      </p>

      <Button
        handleClick={() => window.open(FORMULA_SAE_DETAILS.link, "_blank")}
        btnStyles={
          "border border-white bg-foreground hover:text-foreground px-8 py-4 mt-10 tracking-widest text-white "
        }
        beforeStyles={"before:bg-background "}
        title={"Learn More"}
      />
    </div>
  );
};

export default CompetitionInfo;
