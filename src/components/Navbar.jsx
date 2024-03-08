const Navbar = () => {
  const links = [
    { id: 1, text: "home" },
    { id: 2, text: "about" },
    { id: 3, text: "gallery" },
  ];

  return (
    <div className="sticky top-10 flex flex-row-reverse">
      <div
        className="flex flex-row justify-end items w-full
       bg-madder bg-opacity-75
       skew-y-3
       border-b-4 border-black
       "
      >
        <ul className=" flex flex-row divide-x-4 divide-black sm:mr-24 md:mr-52">
          {links.map((link) => (
            <li key={link.id} className="">
              <a
                href={"#" + link.text}
                className="text-platinum p-4 block uppercase hover:text-grey 
                 cursor-pointer duration-300 font-montserrat font-bold"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
