import React from "react";
import growthGraph from "../assets/growth-graph.svg";

const growthData = [
  {
    grow: "200%",
    task: "Increase in new pipeline generated",
  },
  {
    grow: "70%",
    task: "Increase in form workfore",
  },
  {
    grow: "40%",
    task: "Decrease cost per lead",
  },
];

export default function GrowthSection() {
  return (
    <section className="max-w-5xl mx-auto" id="service">
      <div className="flex flex-col gap-y-2 items-center justify-center py-10 px-10 xl:px-0">
        <h2 className="font-bold max-w-lg mx-auto text-2xl md:text-3xl lg:text-4xl text-center">
          Turn your growth in to Squaree
        </h2>
        <p className="max-w-lg mx-auto text-center">
          The expectation that productivity should always lead to tangible
          results or accomplishments & notion that certain types of work or
          activities are more valuable or productive than others.
        </p>
        <div>
          <img src={growthGraph} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10 gap-y-5">
          {growthData.map((data) => (
            <div
              key={data.grow}
              className="flex flex-col gap-y-2 items-center justify-center py-10 px-10 xl:px-0"
            >
              <h2 className="font-bold max-w-lg mx-auto text-2xl md:text-3xl lg:text-4xl text-center">
                {data.grow}
              </h2>
              <p className="max-w-[10em] mx-auto text-center">{data.task}</p>
            </div>
          ))}
        </div>
        <div>
          <a href="" className="bg-[#F2B53C] px-5 py-2.5 rounded-full">
            Explore more way
          </a>
        </div>
      </div>
    </section>
  );
}
