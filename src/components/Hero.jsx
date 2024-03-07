import { useState, useEffect } from "react";

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
      ${
        showWelcome ? "opacity-100" : "opacity-0"
      }`}
      >
        <h1 className="font-yellowtail text-9xl text-platinum -rotate-12 mb-4">Welcome</h1>
        <h3 className="font-montserrat">Scroll to Enter</h3>
      </div>
    </section>
  );
};

export default Hero;
