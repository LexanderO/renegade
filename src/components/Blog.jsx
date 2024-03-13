import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { navLinks, blogs } from "../constants";

const Blog = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section id={navLinks[3].id} ref={ref} className="">
      <div
        className={`transition-opacity ease-in duration-500 z-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-wrap justify-evenly h-screen">
          <div className="absolute bg-platinum w-full h-24 self-center -skew-y-12 z-10 bg-opacity-40" />
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center z-20">
            <h2
              className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl text-6xl font-bold
                font-yellowtail text-platinum -skew-y-3 w-full text-start  p-5 mb-11"
            >
              {navLinks[3].text}
            </h2>
            <div className="-skew-y-3 bg-gradient-to-r from-grey px-5 w-full">
              <div className="skew-y-3 my-1">
                <div className="border-madder border-r-8 border-t-8 my-2 drop-shadow-2xl backdrop-blur-3xl bg-platinum/0">
                  <div className="flex flex-wrap justify-evenly items-center">
                    <img
                      src={blogs[0].imageURL}
                      alt={blogs[0].title}
                      className="object-cover 2xl:w-1/2 xl:w-1/2 md:w-3/4 sm:w-3/4 md:-ml-20 -ml-0 mt-4
                      transition duration-900
                      border-madder border-l-8 border-b-8 my-2 shadow-xl hover:scale-110"
                    />
                    <div className="xl:w-1/2 w-full text-center">
                      <h3
                        className="font-yellowtail px-3
                    2xl:text-6xl xl:text-5xl lg:text-5xl md:text-6xl sm:text-6xl text-4xl p-2 mb-5 text-madder"
                      >
                        {blogs[0].title}
                      </h3>

                      <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm text-xl font-bold text-platinum/50">
                        "{blogs[0].header}"
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <ul className="list-none mb-5">
                      {blogs[0].texts.map((text, index) => (
                        <li
                          key={index}
                          className="first-letter:text-xl first-line:tracking-widest text-platinum transition duration-900
                                    font-semilight p-3 hover:shadow-2xl hover:scale-110 hover:bg-grey/90 hover:font-bold
                                    2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs text-xl mx-16 text-pretty mb-2 "
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                    <p
                      className="font-yellowtail self-end mr-5 mb-5
                      mt-8 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl"
                    >
                      By{" "}
                      <a className="font-yellowtail hover:text-madder">
                        {blogs[0].author}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/5 sm:1/5 w-full flex flex-col justify-start items-center bg-grey/70 z-40">
            <h2
              className="font-yellowtail 
                        2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl 
                        p-2 text-platinum mb-11 mt-40"
            >
              Other Blogs
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
