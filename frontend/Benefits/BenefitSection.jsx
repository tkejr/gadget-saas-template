import React from "react";
import benefitsvg1 from "../assets/first-benefit-image.jpg";
import benefitsvg2 from "../assets/second-benefit-image.jpg";

function BenefitSection() {
  return (
    <section className="benefit__section py-10 lg:py-24 px-10 lg:px-14">
      <div className="total-benefit-container flex flex-col gap-y-10 max-w-5xl mx-auto">
        {/*first Benefit Section */}
        <div className="first-benefit-section flex flex-col-reverse gap-y-10 lg:flex-row items-center justify-between gap-x-10">
          <div className="left-text leading-[1.25] lg:w-1/2 flex flex-col items-center justify-center gap-y-5 max-w-lg lg:max-w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left text-[#0A071B]">
              Know your productivity by squaree
            </h2>
            <p className="text-sm md:text-base text-center lg:text-left font-medium pr-2 text-[#5B5675]">
              The expectation that productivity should always lead to tangible
              results or accomplishments.
            </p>
          </div>
          <div className="right-image w-full lg:w-1/2">
            <div className=" rounded-2xl image-container relative isolate">
              <img
                className="w-full md:w-2/3 lg:w-full mx-auto"
                src={benefitsvg1}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Second Benefit Section */}
        <div className="second-benefit-section flex flex-col gap-y-10 lg:flex-row items-center justify-between gap-x-0 lg:gap-x-20">
          <div className="left-image w-full lg:w-1/2 ">
            <div className=" rounded-2xl image-container relative isolate">
              <img
                className="w-full md:w-2/3 lg:w-full mx-auto"
                src={benefitsvg2}
                alt=""
              />
            </div>
          </div>
          <div className="right-text leading-[1.25] lg:w-1/2 flex flex-col gap-y-5 max-w-lg lg:max-w-full">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0A071B] text-center lg:text-left">
              Seamless integration with best apps
            </h2>
            <p className="text-sm md:text-base font-medium pr-0 lg:pr-2 text-[#5B5675] text-center lg:text-left">
              What ever you use, we integrate with the best of best
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
