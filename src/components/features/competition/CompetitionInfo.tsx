import Button from "@/components/reusable/Button";
import { FORMULA_SAE_DETAILS } from "@/constants";

const CompetitionInfo = () => {
  return (
    <div>
      <p className="uppercase font-sans font-[600] tracking-widest  text-center text-sm">
        {FORMULA_SAE_DETAILS.name}
      </p>

      <h1 className="mt-4 font-barlow text-4xl md:text-5xl leading-tight uppercase whitespace-pre-line text-center">
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

      <p className="mt-8 max-w-5xl leading-8 font-sans text-foreground mx-auto text-center">
        {FORMULA_SAE_DETAILS.description}
      </p>
    </div>
  );
};

export default CompetitionInfo;
