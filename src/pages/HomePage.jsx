import React from "react";
import Welcome from "../components/Welcome";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import Faq from "../components/Faq";

const HomePage = () => {
  return (
    <div className="home-page">
      <Welcome />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
    </div>
  );
};

export default HomePage;
