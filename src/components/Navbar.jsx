import { useState } from "react";

import { navLinks } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky top-10 z-50 flex flex-row-reverse">
      <div
        className="flex flex-row justify-end items-center w-full h-16
       bg-madder/50 drop-shadow-2xl backdrop-blur-sm
       skew-y-3"
      >
        <ul className="hidden md:flex flex-row sm:mr-24 md:mr-52">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className="">
              <a
                href={"#" + navLink.id}
                className="text-platinum p-4 block uppercase hover:text-grey 
                 cursor-pointer duration-300 font-montserrat font-bold"
              >
                {navLink.text}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handleMenu} className="md:hidden mr-4 self-center">
          {showMenu ? (
            <span className="text-4xl">X</span>
          ) : (
            <span className="text-4xl">&#9776;</span>
          )}
        </div>
      </div>
      <ul
        className={
          showMenu
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full bg-madder/20 drop-shadow-2xl backdrop-blur-xl ease-in-out duration-700"
            : "ease-in-out w-[60%] duration-700 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {navLinks.map((navLink) => (
          <li key={navLink.id} className="my-11 ml-5">
            <a
              href={"#" + navLink.id}
              onClick={handleMenu}
              className="text-platinum p-4 block uppercase hover:text-grey 
             cursor-pointer duration-300 font-montserrat font-bold text-xl"
            >
              {navLink.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
