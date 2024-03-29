import { footerLinks } from "../Constant";

const Footer = () => {
  return (
    <footer
      className="bg-Very_dark_black_blue_footer_background text-Grayish_blue_footer_text
        py-16  font-ubuntu mt-[100px] lg:mt-[120px] rounded-tr-[100px]"
    >
      <div className="grid gap-y-10 lg:grid-cols-4 max-w-[1110px] mx-auto w-[90%]">
        <a className="justify-self-center mb-7 lg:justify-self-start" href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        {footerLinks.map((item) => (
          <div
            className="justify-self-center text-center lg:text-left lg:justify-self-start "
            key={item.header}
          >
            <p className="font-medium text-lg leading-7 ">{item.header}</p>
            <ul className="mt-5">
              {item.links.map((link) => (
                <li className=" hover:underline cursor-pointer " key={link}>
                  <a className="font-regular text-base leading-7 opacity-75  lg:text-[15px]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
