import { useEffect, useRef, useState } from "react";
import { footerLinks } from "../Constant";
import Button from "./Button";
import MobileNavbar from "./MobileNavbar";
import AOS from "aos";

const Navbar = () => {
  const [toggleState, setToggleState] = useState(footerLinks.map((n) => false));
  const [showHamburger, setShowHamburger] = useState(false);
  const navLinkRef = useRef(null);

  const handleToggleState = (index) => {
    setToggleState((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : false))
    );
  };

  const hamburgerToggle = () => {
    setShowHamburger((prevToggleMenu) => !prevToggleMenu);
  };

  const handleClickOutside = (event) => {
    if (navLinkRef.current && !navLinkRef.current.contains(event.target)) {
      setToggleState(footerLinks.map((n) => false));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <header className="relative font-ubuntu max-w-[1110px] mx-auto py-5 w-[90%]">
      <nav className="flex justify-between items-center">
        <div ref={navLinkRef} className="flex">
          <a className="outline-none w-[100px]" href="#">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <ul className="hidden lg:flex items-center ml-16 gap-8">
            {footerLinks.map((link, index) => (
              <li className="relative" key={link.header}>
                <div
                  onClick={() => handleToggleState(index)}
                  className="flex items-center"
                >
                  <a
                    className={`${toggleState[index] && "underline"} text-base font-bold outline-none text-White_text mr-2 hover:underline `}
                    href="#"
                  >
                    {link.header}
                  </a>
                  <span>
                    {!toggleState[index] ? (
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
                {toggleState[index] && (
                  <ul className="z-20 absolute top-10 bg-White_text text-Very_dark_gray_blue text-sm leading-8 ] rounded-md p-6 shadow-xl">
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
        <div className="hidden lg:block">
          <a
            className="text-White_text text-base opacity-75 mr-8 outline-none hover:opacity-100 hover:underline focus:opacity-100"
            href="#"
          >
            Login
          </a>
          <Button varient="white">Sign Up</Button>
        </div>
        <div onClick={hamburgerToggle} className="lg:hidden cursor-pointer">
          {!showHamburger ? (
            <img src="/images/icon-hamburger.svg" alt="" />
          ) : (
            <img src="/images/icon-close.svg" alt="" />
          )}
        </div>
      </nav>

      {showHamburger && (
        <div
          data-aos={showHamburger ? "fade-left" : "fade-right"}
          className="z-30 absolute top-20 w-[90%]"
        >
          <MobileNavbar />
        </div>
      )}
    </header>
  );
};

export default Navbar;
