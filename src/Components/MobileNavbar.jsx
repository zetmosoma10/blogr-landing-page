import { useEffect, useState } from "react";
import { footerLinks } from "../Constant";
import Button from "./Button";
import AOS from "aos";

const MobileNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(footerLinks.map((n) => false));
  console.log(toggleMenu);

  const handleToggleMenu = (index) => {
    setToggleMenu((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : false))
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" lg:hidden rounded-md bg-White_text font-overpass text-center text-Very_dark_blue_headings px-6 py-8 drop-shadow-2xl">
      <ul className="space-y-6 pb-6 border-b border-Grayish_blue_footer_text">
        {footerLinks.map((link, index) => (
          <li key={link.header}>
            <div
              onClick={() => handleToggleMenu(index)}
              className="flex items-center justify-center text-center"
            >
              <a
                className={`${toggleMenu[index] && "opacity-75"} text-base font-bold outline-none  text-Very_dark_blue_headings mr-2 hover:underline `}
                href="#"
              >
                {link.header}
              </a>
              <span>
                <img
                  className={`${toggleMenu[index] && "rotate-180"}`}
                  src="/images/icon-arrow-dark.svg"
                  alt=""
                />
              </span>
            </div>
            {toggleMenu[index] && (
              <ul
                data-aos="fade-down"
                className=" bg-White_text bg-Grayish_blue_footer_text bg-opacity-25 text-Very_dark_gray_blue text-sm leading-8  rounded-md  py-3"
              >
                {link.links.map((subLinks) => (
                  <li key={subLinks}>
                    <a
                      className="font-semibold focus:underline text-Very_dark_blue_headings opacity-75 focus:font-bold outline-none"
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
      <div className="flex flex-col items-center ">
        <a
          className="font-semibold text-lg leading-7 py-6 focus:underline"
          href="#"
        >
          Login
        </a>
        <Button varient="red">Sign Up</Button>
      </div>
    </div>
  );
};

export default MobileNavbar;
