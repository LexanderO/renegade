import { useRef } from "react";

import useScrollVisibility from "../hooks/useScrollVisibility.js";
import { navLinks } from "../constants";

const Login = () => {
  const ref = useRef();
  const isVisible = useScrollVisibility(ref);

  return (
    <section id={navLinks[2].id} ref={ref} className="">
      <div
        className={`transition-opacity ease-in duration-900 z-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-nowrap justify-center h-screen">
          <div className="absolute bg-platinum w-full h-24 self-center skew-y-12 z-0 bg-opacity-40" />
          <div className="bg-grey/70 z-10 w-full hidden xl:flex xl:w-1/3 flex-col justify-center items-center text-wrap">
            <h2
              className="font-yellowtail 
                        2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl 
                        p-2 text-platinum mb-11"
            >
              Welcome Back!
            </h2>
            <p className="first-letter:text-xl first-line:tracking-widest text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-md text-md">
              We are always happy to see you,
              <br />
              <span className="text-madder uppercase font-extrabold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl">
                let's catchup!
              </span>
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col w-full mx-3">
              <h2
                className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl text-6xl font-bold
                font-yellowtail text-platinum -skew-y-3 w-full text-center p-5 mb-11"
              >
                {navLinks[2].text}
              </h2>
              <div className="-skew-y-3 bg-gradient-to-r from-grey px-5 lg:w-2/4 md:w-3/4 w-full self-center">
                <div className="skew-y-3 my-1">
                  <div className="border-madder border-r-8 border-t-8 my-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/0 ">
                    <form className="flex flex-col items-center my-5 mx-3">
                      <label
                        htmlFor="email"
                        className="font-yellowtail 
                        2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl 
                        p-2 text-platinum"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                        placeholder="Your address@email.com"
                        className="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-md text-md
                        md:w-3/4 w-full md:h-16 h-auto p-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/0 border-madder border-r-8 border-t-8 mb-5"
                      />
                      <label
                        htmlFor="password"
                        className="font-yellowtail 
                        2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl 
                        p-2 text-platinum"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        autocomplete="password"
                        placeholder="Your password"
                        className="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-md text-md
                        md:w-3/4 w-full md:h-16 h-auto p-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/0 border-madder border-r-8 border-t-8 mb-5"
                      />
                      <button
                        type="submit"
                        className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-yellowtail text-platinum
                        md:w-3/4 w-full md:h-16 h-auto p-2 drop-shadow-2xl backdrop-blur-xl bg-platinum/10 hover:bg-madder hover:text-blackbean"
                      >
                        Login
                      </button>
                    </form>
                    <center>
                      <a
                        html="#register"
                        className="self-center md:w-3/4 w-full md:h-16 h-auto p-2 my-11 cursor-pointer hover:text-madder"
                      >
                        Forgot Password?
                      </a>
                    </center>
                    <div className="my-4 mx-32 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                      <p className="mx-4 mb-0 text-center font-semibold text-platinum font-yellowtail">
                        OR
                      </p>
                    </div>
                    <center className="mb-6">
                      <a
                        html="#register"
                        className="self-center md:w-3/4 w-full md:h-16 h-auto p-2 cursor-pointer hover:text-madder"
                      >
                        Register
                      </a>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </section>
  );
};

export default Login;
