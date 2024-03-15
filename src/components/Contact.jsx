import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { navLinks } from "../constants";

const Contact = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section id={navLinks[3].id} ref={ref} className="mb-11">
      <div
        className={`transition-opacity ease-in duration-500 z-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </section>
  );
};

export default Contact;
