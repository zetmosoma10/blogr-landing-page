const Showcase = () => {
  return (
    <section className="font-overpass">
      <div className="grid  lg:grid-cols-2 gap-y-10 gap-x-28">
        <picture className=" justify-self-center lg:justify-self-start ">
          <source
            media="(max-width:1023px )"
            srcSet="/images/illustration-laptop-mobile.svg"
          />
          <source
            media="(min-width:1024px )"
            srcSet="/images/illustration-laptop-desktop.svg"
          />
          <img src="/images/illustration-laptop-desktop.svg" alt="desktop" />
        </picture>
        <div className=" justify-self-center lg:justify-self-start text-center lg:text-start self-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold leading-8 text-Very_dark_blue_headings">
              Free, open, simple
            </h3>
            <p className="text-base text-Very_dark_grayish_blue_body_copy leading-[28px] tracking-[0.5px] mt-4">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="mt-10 lg:mt-16">
            <h3 className="text-2xl lg:text-3xl font-semibold leading-8 text-Very_dark_blue_headings">
              Powerful tooling
            </h3>
            <p className="text-base text-Very_dark_grayish_blue_body_copy leading-[28px] tracking-[0.5px] mt-4">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
