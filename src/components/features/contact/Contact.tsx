import { ReactNode } from "react";

const Contact = ({ children }: { children: ReactNode }) => {
  return (
    <section className="wrapper section-padding">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8  ">
        {children}
      </div>
    </section>
  );
};

export default Contact;
