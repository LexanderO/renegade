import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { navLinks, aboutDescriptions } from "../constants";
import { RedGirl } from "../assets";

const TileCard = ({ index, title, description, steps }) => (
  <div className="border-madder border-r-8 border-t-8  my-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/0 ">
    <h3
      className="text-right font-yellowtail 
    2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl p-2 text-platium"
    >
      {title}
    </h3>
    <div className="flex flex-wrap text-pretty justify-between items-center gap-1 px-10">
      <p
        className="first-letter:text-xl first-line:tracking-widest lg:w-2/5 md:w-full sm:w-full font-bold 
      2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs text-xs text-madder mb-2"
      >
        {description}
      </p>
      <ol className="list-disc mb-5 ">
        {steps.map((step, index) => (
          <li
            key={index}
            className="
            2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs text-xs text-platinum px-2"
          >
            {step}
          </li>
        ))}{" "}
      </ol>
    </div>
  </div>
);

const About = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section id={navLinks[0].id} ref={ref} className="flex items-center">
      <div className="absolute bg-platinum w-full h-24 skew-y-12" />
      <div className="absolute bg-platinum w-full h-24 self-end -skew-y-12" />
      <div
        className={`transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className=" skew-y-3
       bg-burgundy bg-opacity-95 border-black border-b-8 pt-11"
        >
          <h2
            className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl text-6xl font-bold
          font-yellowtail text-platinum -skew-y-3 w-full text-center p-5 mb-11"
          >
            {navLinks[0].text}
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="-skew-y-6 2xl:w-2/4 xl:w-3/4 md:w-3/4 sm:3/4 bg-gradient-to-r from-grey px-11 mb-24">
              <div className="skew-y-3 flex flex-col md:-mr-16">
                {aboutDescriptions.map((aboutDescription, index) => (
                  <TileCard
                    key={aboutDescription.title}
                    index={index}
                    description={aboutDescription.description}
                    steps={aboutDescription.steps}
                    {...aboutDescription}
                  />
                ))}
              </div>
            </div>
            <img
              src={RedGirl}
              alt="Red Girl"
              className="object-scale-down 2xl:w-1/4 xl:w-1/4 md:w-3/4 sm:3/4 self-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
