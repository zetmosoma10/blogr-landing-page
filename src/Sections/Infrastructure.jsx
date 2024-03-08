import { useEffect } from "react";
import AOS from "aos";

const Infrastructure = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="bg-[url(/images/bg-pattern-circles.svg)] bg-no-repeat bg-top 
      bg-center bg-contain lg:bg-left font-overpass bg-Very_dark_desaturated_blue
       text-White_text  lg:pb-0 mt-32 rounded-tr-[100px] rounded-bl-[100px]"
    >
      <div className="grid grid-rows-[40%,60%] w-[90%] lg:grid-cols-2 lg:grid-rows-none max-w-[1110px] mx-auto lg:gap-x-16 ">
        <div data-aos="fade-up" className="self-end justify-self-center">
          <img src="/images/illustration-phones.svg" alt="phones" />
        </div>
        <div
          data-aos="fade-left"
          className=" text-center lg:text-start lg:self-center"
        >
          <h2 className="font-semibold text-[40px] tracking-[-1.2px]">
            State of the Art Infrastructure
          </h2>
          <p className="text-base leading-7 tracking-[0.5px] mt-2">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
