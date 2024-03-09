import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { navLinks } from "../constants";

const Gallery = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section id={navLinks[1].id} ref={ref} className="flex items-center">
      <div className="absolute bg-platinum w-full h-24 skew-y-12" />
      <div className="absolute bg-platinum w-full h-24 self-end -skew-y-12" />
      <div
        className={`transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-screen w-full">

        </div>
      </div>
    </section>
  );
};

export default Gallery;
