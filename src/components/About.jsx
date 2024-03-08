import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { RedGirl } from "../assets";

const About = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section
      ref={ref}
      className={`transition-opacity ease-in duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-wrap justify-center skew-y-3 bg-burgundy border-black border-b-8 pt-11">
        <div className="-skew-y-6 w-[40%] bg-madder">
          <p className="font-montserrat text-2 text-platinum"></p>
        </div>
        <img
          src={RedGirl}
          alt="Red Girl"
          className="object-scale-down w-[30%] self-end"
        />
      </div>
    </section>
  );
};

export default About;
