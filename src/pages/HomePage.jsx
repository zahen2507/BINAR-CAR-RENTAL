import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import { Helmet } from "react-helmet";

const HomePage = () => {
  useEffect(() => {
    document.title =
      "Binar Car Rental - Rental Mobil Terbaik di Seluruh Indonesia ";
  }, []);
  return (
    <div className="home-page">
      <Helmet>
        <meta
          name="description"
          content="Sewa mobil di Indonesia bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll."
        />
        <meta
          name="description"
          content="Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam."
        />
        <meta
          name="keywords"
          content="sewa mobil, car rental, binar, binar car rental, penyewaan mobil, cari mobil, binar, rental car, sewa mobil murah, cheap car rental, website penyewaan mobil"
        />
      </Helmet>
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
