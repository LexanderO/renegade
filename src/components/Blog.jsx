import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { navLinks } from "../constants";

const Blog = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section id={navLinks[3].id} ref={ref} className="">
      <div
        className={`transition-opacity ease-in duration-1000 z-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-wrap justify-evenly h-screen">
          <div className="absolute bg-platinum w-full h-24 self-center -skew-y-12 z-10 bg-opacity-40" />
          <div className="w-1/2 flex flex-col justify-center items-center z-20">
            <h2
              className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl text-6xl font-bold
                font-yellowtail text-platinum -skew-y-3 w-full text-center p-5 mb-11"
            >
              {navLinks[3].text}
            </h2>
            <div className="-skew-y-3 bg-gradient-to-r from-grey px-5 w-full">
              <div className="skew-y-3 my-1">
                <div className="border-madder border-r-8 border-t-8 my-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/0"></div>
              </div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col justify-start  items-center bg-grey/70 z-40">
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
