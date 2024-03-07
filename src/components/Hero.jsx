import { useState, useEffect } from "react";

import { RedGirl } from "../assets";

const Hero = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(true);
    }, 1000);
    return () => {
      setShowWelcome(false);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`flex flex-col justify-center items-center h-screen transform transition-opacity duration-500 
      ${showWelcome ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="font-yellowtail text-9xl text-platinum -rotate-12">
          Welcome
        </h1>
        <img src={RedGirl} alt="Red Girl" className="object-scale-down h-1/2 w-1/2" />
      </div>
    </section>
  );
};

export default Hero;
