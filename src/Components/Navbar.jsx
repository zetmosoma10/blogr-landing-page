import { useState } from "react";
import { footerLinks } from "../Constant";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (id) => {
    console.log(id);
    if (id === "1") {
      setToggle((prevToggle) => !prevToggle);
      return;
    }
    if (id === "2") {
      setToggle((prevToggle) => !prevToggle);
      return;
    }
    if (id === "3") {
      setToggle((prevToggle) => !prevToggle);
      return;
    }
  };
  return (
    <header className="font-ubuntu">
      <nav className="flex justify-between items-center">
        <div className="flex">
          <a className="outline-none w-[100px]" href="#">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <ul className="flex items-start ml-16 gap-8">
            {footerLinks.map((link) => (
              <li className="relative" key={link.header}>
                <div className="flex items-center">
                  <a
                    className={`${toggle && "underline"} text-base font-bold outline-none text-White_text mr-2 hover:underline focus:underline`}
                    href="#"
                    onClick={() => handleToggle(link.id)}
                  >
                    {link.header}
                  </a>
                  <span>
                    {!toggle ? (
                      <img src="/images/icon-arrow-dark.svg" alt="" />
                    ) : (
                      <img
                        className="rotate-180"
                        src="/images/icon-arrow-light.svg"
                        alt=""
                      />
                    )}
                  </span>
                </div>
                {toggle && (
                  <ul className="absolute top-10 bg-White_text text-Very_dark_gray_blue text-sm leading-8 ] rounded-md p-6 ">
                    {link.links.map((subLinks) => (
                      <li key={subLinks}>
                        <a
                          className="hover:font-bold focus:font-bold outline-none"
                          href="#"
                        >
                          {subLinks}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a
            className="text-White_text text-base opacity-75 mr-8 outline-none hover:opacity-100 focus:opacity-100"
            href="#"
          >
            Login
          </a>
          <Button varient="white">Sign Up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
