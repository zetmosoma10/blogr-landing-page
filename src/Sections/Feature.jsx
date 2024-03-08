import { useEffect } from "react";
import AOS from "aos";

const Feature = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="font-overpass max-w-[1110px]  mx-auto w-[90%]">
      <h2 className="text-center  text-3xl font-semibold text-Very_dark_blue_headings tracking-[-0.84px] lg:text-4xl">
        Designed for the future
      </h2>
      <div className="grid mt-10 lg:mt-20 gap-y-10 lg:grid-cols-[50%,50%] lg:gap-x-10 ">
        <div
          data-aos="zoom-in-left"
          className="order-1 justify-self-center lg:order-2 min-h-full"
        >
          <picture className="lg:justify-self-end  ">
            <source
              media="(max-width:1023px )"
              srcSet="/images/illustration-editor-mobile.svg"
            />
            <source
              media="(min-width:1024px )"
              srcSet="/images/illustration-editor-desktop.svg"
            />
            <img src="/images/illustration-editor-desktop.svg" alt="desktop" />
          </picture>
        </div>
        <div
          data-aos="zoom-in-right"
          className="order-2 lg:order-1  justify-self-center px-5 text-center lg:text-left lg:justify-self-start lg:self-center  "
        >
          <h3 className="text-2xl lg:text-3xl font-semibold leading-8 text-Very_dark_blue_headings">
            Introducing an extensible editor
          </h3>
          <p className="text-base text-Very_dark_grayish_blue_body_copy leading-[28px] tracking-[0.5px] mt-4">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3 className="text-2xl lg:text-3xl font-semibold leading-8 text-Very_dark_blue_headings mt-10 lg:mt-16">
            Robust content management
          </h3>
          <p className="text-base text-Very_dark_grayish_blue_body_copy leading-[28px] tracking-[0.5px] mt-4">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
