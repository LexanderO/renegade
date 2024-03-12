import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { navLinks, imageCards } from "../constants";

const ImageCard = ({ size, author, title, imageURL }) => (
  <div className={`group relative ${size} sm:max-w-2xl`}>
    <div className="skew-y-3">
      <div className="z-10 h-full w-full md:opacity-90 shadow-2xl overflow-hidden group-hover:opacity-100 group-hover:-skew-y-3 border-madder border-r-8 border-t-8 transition duration-900 ease-in-out">
        <img
          src={imageURL}
          className="block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-900 group-hover:scale-110"
          alt={title}
        />
      </div>
      <div className="absolute bottom-0 z-20 pl-1 transition duration-900 ease-in-out group-hover:-skew-y-3 group-hover:translate-x-3 group-hover:scale-110">
        <h2
          className="font-yellowtail backdrop-blur-md bg-platinum/0 pr-2
    2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-bold text-platinum"
        >
          {title}
        </h2>
        <p className="text-right -ml-2 pr-1 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs bg-platinum text-grey mb-1">
          By <span className="font-bold text-madder">{author}</span>
        </p>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section
      id={navLinks[1].id}
      ref={ref}
      className="flex justify-center items-center"
    >
      <div
        className={`transition-opacity ease-in duration-1000 z-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2
          className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl text-6xl font-bold
          font-yellowtail z-60 text-platinum -skew-y-3 w-full text-center p-5 mb-24 mt-40"
        >
          {navLinks[1].text}
        </h2>
        <div className="h-auto w-full ">
          <div className="flex flex-wrap justify-center items-center gap-10">
            {imageCards.map((imageCard, index) => (
              <ImageCard
                key={index}
                size={
                  (index + Math.floor(Math.random() * (2 - 1 + 1) + 1)) % 2 ===
                  0
                    ? "lg:h-auto lg:w-full md:h-auto md:w-1/2 sm:h-auto sm:w-1/2 h-56 w-80"
                    : "md:h-56 md:w-96 h-56 w-72"
                }
                {...imageCard}
              />
            ))}
          </div>
          <div className="flex justify-center my-20">
            <button className="z-60 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-5xl font-bold text-blackbean text-center font-yellowtail hover:text-madder">
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
