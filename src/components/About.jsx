import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { navLinks, aboutDescriptions } from "../constants";
import { RedGirl } from "../assets";

const TileCard = ({ index, title, description, steps }) => (
  <div className="border-platinum border-r-8 bg-burgundy my-5">
    <h3 className="text-xl text-right p-5 font-bold text-platinum">{title}</h3>
    <p className="text-lg pb-4 text-black font-bold px-10">{description}</p>
    <ol className="list-disc px-10">
      {steps.map((step, index) => (
        <li key={index} className="text-lg text-plantinum p-1">
          {step}
        </li>
      ))}{" "}
    </ol>
  </div>
);

const About = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section
      id={navLinks[0].id}
      ref={ref}
      className={`transition-opacity ease-in duration-700 mt-24 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="flex flex-wrap justify-center skew-y-3
       bg-burgundy bg-opacity-95 border-black border-b-8 pt-11"
      >
        <div className="-skew-y-6 2xl:w-2/4 xl:w-3/4 md:w-3/4 sm:3/4 bg-madder px-11">
          <div className="skew-y-3 flex flex-col -mr-16">
            <h2 className="text-4xl -skew-x-3 text-right  bg-platinum p-5 font-bold text-grey font-yellowtail">
              {navLinks[0].text}
            </h2>
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
          className="object-scale-down 2xl:w-1/4 xl:w-1/4 md:w-3/4 sm:3/4 mt-5 self-end"
        />
      </div>
    </section>
  );
};

export default About;
