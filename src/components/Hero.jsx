import { useState, useEffect, useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { RedGirl } from "../assets";

const Hero = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(true);
    }, 1500);
    return () => {
      setShowWelcome(false);
    };
  }, []);

  return (
    <section className="relative w-full mx-auto">
      <div
        className={`flex flex-col justify-center items-center 
        h-screen transform transition-opacity duration-500 mb-11
      ${showWelcome ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="font-yellowtail text-9xl text-platinum -rotate-6">
          Welcome
        </h1>
        <h3 className="font-yellowtail text-3xl text-platinum">
          to Renegade Template
        </h3>
      </div>
      <div
        ref={ref}
        className={`transition-opacity ease-in duration-700 h-screen ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-wrap justify-center skew-y-3 bg-burgundy border-black border-b-8 pt-11 mt-11">
          <div className="-skew-y-6 w-1/2 bg-madder">
            <p className="font-montserrat text-2 text-platinum"></p>
          </div>
          <img
            src={RedGirl}
            alt="Red Girl"
            className="object-scale-down w-1/3 self-end"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
