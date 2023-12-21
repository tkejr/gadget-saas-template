import React, { useEffect } from "react";

import HeroSection from "../Hero/HeroSection";
import GrowthSection from "../Growth/GrowthSection";
import BenefitSection from "../Benefits/BenefitSection";
import PricingSection from "../Pricing/PricingSection";
import TestimonialSection from "../Testimonial/TestimonialSection";

export default function HomePage() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        if (document.readyState === "complete") {
          // If the page is already loaded, scroll immediately
          scrollToHash(hash);
        } else {
          // Otherwise, wait for the load event
          window.addEventListener("load", () => scrollToHash(hash), {
            once: true,
          });
        }
      }
    };

    handleHashChange();

    // Optional: Add a listener for hash changes while on the page
    window.addEventListener("hashchange", handleHashChange, false);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  const scrollToHash = (hash) => {
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSection />
      <GrowthSection />
      <BenefitSection />
      <TestimonialSection />
      <PricingSection />
    </>
  );
}
