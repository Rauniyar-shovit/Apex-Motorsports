import Typewriter, { Options } from "typewriter-effect";

interface MyTypewriterOptions extends Partial<Options> {
  pauseFor?: number;
}

const AnimatedText = ({ titles }: { titles: string | string[] }) => {
  return (
    <Typewriter
      options={
        {
          delay: 55,
          strings: titles,
          autoStart: true,
          pauseFor: 5000,
          deleteSpeed: 35,
          loop: true,
          cursor: "",
        } as MyTypewriterOptions
      }
    />
  );
};

export default AnimatedText;
