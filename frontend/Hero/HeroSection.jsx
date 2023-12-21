import React from "react";
import fluidGlu from "../assets/fluid-glu.svg";
import hikkeno from "../assets/bubble.svg";
import bubble from "../assets/hikkeno.svg";
import heroImage1 from "../assets/heroImage-1.jpg";
import heroImage2 from "../assets/heroImage-2.jpg";
import heroImage3 from "../assets/heroImage-3.jpg";
import heroImage4 from "../assets/heroImage-4.jpg";

function HeroSection() {
  return (
    <section className="hero__section">
      <div className="hero__container px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-24">
        <div className="hero-content lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] max-w-lg mx-auto text-center font-semibold text-black">
            Predictable growth starts here
          </h1>
          <p className="text-base md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full text-center">
            Squaree helps users to go from Zero to Hero with Pockets flow's
            simple platform that helps creators like you sell their digital
            products online.
          </p>
        </div>
      </div>
      {/* Featured-company Section */}
      <div className="testimonial-company flex flex-col gap-y-5 lg:gap-y-10 items-center justify-center px-5 py-5 lg:pb-20">
        <p className="text-base text-center lg:text-xl font-medium px-10 text-slate-500/70">
          We have the fast paced growing companies with us
        </p>
        <div className="company-logo flex items-center lg:w-full max-w-4xl mx-auto justify-center gap-x-10 lg:gap-x-20">
          <img
            className="h-14 w-24 lg:h-auto lg:w-auto"
            src={fluidGlu}
            alt=""
          />
          <img className="h-14 w-24 lg:h-auto lg:w-auto" src={hikkeno} alt="" />
          <img className="h-14 w-24 lg:h-auto lg:w-auto" src={bubble} alt="" />
        </div>
      </div>
      <div className="image-hero-section flex flex-col lg:flex-row gap-5 items-start justify-center p-10 max-w-6xl mx-auto rounded-none lg:rounded-2xl overflow-hidden">
        <img className="rounded-xl" src={heroImage1} alt="" />
        <img className="lg:mt-14" src={heroImage2} alt="" />
        <img className="rounded-xl" src={heroImage3} alt="" />
        <img className="rounded-xl" src={heroImage4} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
