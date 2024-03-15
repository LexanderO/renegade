import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { navLinks } from "../constants";

const Register = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section id={navLinks[4].id} ref={ref} className="">
      <div
        className={`transition-opacity ease-in duration-500 z-10 h-auto ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2
          className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl text-6xl font-bold 
      font-yellowtail text-platinum -skew-y-3 w-full text-center p-5 mb-24 pt-24"
        >
          {navLinks[4].text}
        </h2>
        <div className="flex justify-center ">
          <div className="absolute bg-platinum w-full h-24 self-center -skew-y-12 -z-5 bg-opacity-40" />
          <div className="-skew-y-3 bg-gradient-to-r from-grey px-5 lg:w-3/6 md:w-3/4 w-full self-center mb-24">
            <div className="skew-y-3 my-1">
              <div className="border-madder border-r-8 border-t-8 my-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/0 ">
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm text-xl font-semibold text-center mt-11 text-platinum">
                  Thank you for joining,
                </p>
                <p className="mx-2 2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm text-xl font-extrabold text-center mb-11 text-madder">
                  Our fast register form will have you signed up in no time!
                </p>
                <form className="flex flex-col items-center my-5 mx-3">
                  <label
                    htmlFor="register-username"
                    className="font-yellowtail
              2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl 
              p-2 text-platinum"
                  >
                    Username
                  </label>
                  <input
                    type="name"
                    id="register-username"
                    name="name"
                    autoComplete="email"
                    placeholder="nickname"
                    className="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-md text-md
              md:w-3/4 w-full md:h-16 h-auto p-2 drop-shadow-2xl bg-platinum/0 border-madder border-r-8 border-t-8 mb-5"
                  />
                  <label
                    htmlFor="register-email"
                    className="font-yellowtail 
              2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl 
              p-2 text-platinum"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    name="email"
                    autoComplete="email"
                    placeholder="address@email.com"
                    className="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-md text-md
              md:w-3/4 w-full md:h-16 h-auto p-2 drop-shadow-2xl bg-platinum/0 border-madder border-r-8 border-t-8 mb-5"
                  />
                  <label
                    htmlFor="register-password"
                    className="font-yellowtail 
              2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl 
              p-2 text-platinum"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="register-password"
                    name="password"
                    autoComplete="password"
                    placeholder="password"
                    className="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-md text-md
              md:w-3/4 w-full md:h-16 h-auto p-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/0 border-madder border-r-8 border-t-8 mb-5"
                  />
                  <label
                    htmlFor="register-confirm-password"
                    className="font-yellowtail 
              2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl 
              p-2 text-platinum"
                  >
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    id="register-confirm-password"
                    name="password"
                    autoComplete="password"
                    placeholder="password"
                    className="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-md text-md
              md:w-3/4 w-full md:h-16 h-auto p-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/0 border-madder border-r-8 border-t-8 mb-5"
                  />
                  <button
                    type="submit"
                    className="mt-24 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-yellowtail text-platinum
              md:w-3/4 w-full md:h-16 h-auto p-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/10 hover:bg-madder hover:text-blackbean"
                  >
                    Register
                  </button>
                </form>

                <div className="my-4 mx-32 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold text-platinum font-yellowtail">
                    OR
                  </p>
                </div>
                <center className="mb-6">
                  <a
                    href="#login"
                    className="self-center md:w-3/4 w-full md:h-16 h-auto p-2 cursor-pointer hover:text-madder"
                  >
                    Already have an account?
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
