import Button from "../Components/Button";
import Navbar from "../Components/Navbar";

const Hero = () => {
  return (
    <section
      className="bg-Light_red_CTA_text bg-[url(images/bg-pattern-intro-mobile.svg)] lg:bg-[url(images/bg-pattern-intro-desktop.svg)] 
       bg-top bg-center bg-contain bg-no-repeat font-overpass rounded-bl-[100px] pb-36"
    >
      <Navbar />
      <div className="text-center mt-24 ">
        <h1 className="font-semibold text-4xl lg:text-6xl tracking-[-1.08px] lg:tracking-[-1.92px] text-White_text">
          A modern publishing platform
        </h1>
        <p className="text-lg lg:text-xl text-White_text">
          Grow your audience and build your online brand
        </p>
        <div className="mt-12 space-x-4">
          <Button varient="white">Start for Free</Button>
          <Button varient="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
