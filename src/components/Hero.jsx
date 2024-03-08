import { useState, useEffect } from "react";

const Hero = () => {
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
    <section>
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
    </section>
  );
};

export default Hero;
