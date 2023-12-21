import React from "react";
import testPfp1 from "../assets/testimonial-pfp-1.png";
import testPfp2 from "../assets/testimonial-pfp-2.png";
import testPfp3 from "../assets/testimonial-pfp-3.png";
import testPfp4 from "../assets/testimonial-pfp-4.png";

const testimonialData = [
  {
    name: "Jane Cooper",
    title: "CEO at ABC Corporation",
    imageSrc: testPfp1,
    testimonial: "Brilliant house to rent",
    description:
      "All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer.",
    layout: "col-span-2",
  },
  {
    name: "John Doe",
    title: "CTO at XYZ Corporation",
    imageSrc: testPfp2,
    testimonial: "Great experience working with this team",
    description:
      "Cycle has helped us streamline our development process and deliver high-quality products on time.",
    layout: "col-span-3",
  },
  {
    name: "Jane Doe",
    title: "CTO at XYZ Corporation",
    imageSrc: testPfp3,
    testimonial: "It feels much more safe",
    description:
      "As a company with a strong Slack culture, it's important that we find ways to meet our champions where they are, and Channeled allows us to do just that.",
    layout: "col-span-3",
  },
  {
    name: "Ash Doe",
    title: "CTO at XYZ Corporation",
    imageSrc: testPfp4,
    testimonial: "Secure search for all",
    description:
      "All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer.",
    layout: "col-span-2",
  },
];

export default function TestimonialSection() {
  return (
    <section className="max-w-5xl mx-auto w-full px-10">
      <div className="flex items-center justify-center flex-col gap-y-2 py-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Testimonials
        </h2>
        <p className="text-lg font-medium text-slate-700/70">
          Here is how homely can help you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        {testimonialData.map((testimonial) => (
          <div
            key={testimonial.name}
            className={`border p-7 rounded-xl bg-white drop-shadow-md border-neutral-200/50 ${testimonial.layout} flex flex-col gap-y-10 justify-between`}
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl">{testimonial.testimonial}</p>
              <p className="font-medium text-slate-700/90">
                {testimonial.description}
              </p>
            </div>

            <div className="flex flex-col">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold">{testimonial.name}</p>
              <p className="text-sm font-medium text-slate-700/70">
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
