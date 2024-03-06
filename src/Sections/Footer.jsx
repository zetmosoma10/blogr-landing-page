import { footerLinks } from "../Constant";

const Footer = () => {
  return (
    <footer
      className="bg-Very_dark_black_blue_footer_background text-White_text
        py-16 px-5 font-ubuntu mt-[100px] md:mt-[120px] rounded-tr-[100px]"
    >
      <div className="grid gap-y-10 md:grid-cols-4 max-w-[1110px] mx-auto">
        <a className="justify-self-center mb-7 md:justify-self-start" href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        {footerLinks.map((item) => (
          <div
            className="justify-self-center text-center md:text-left md:justify-self-start "
            key={item.header}
          >
            <p className="font-medium text-lg leading-7 ">{item.header}</p>
            <ul className="mt-5">
              {item.links.map((link) => (
                <li className=" hover:underline cursor-pointer " key={link}>
                  <a className="font-regular text-base leading-7 opacity-75  md:text-[15px]">
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
