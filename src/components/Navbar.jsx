import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <div className="sticky top-10 z-50 flex flex-row-reverse">
      <div
        className="flex flex-row justify-end items w-full
       bg-madder bg-opacity-75
       skew-y-3
       border-b-4 border-black
       "
      >
        <ul className=" flex flex-row divide-x-4 divide-black sm:mr-24 md:mr-52">
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
      </div>
    </div>
  );
};
export default Navbar;
