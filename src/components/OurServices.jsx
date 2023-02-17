import React from "react";
import ImgServices from "../assets/images/img_service.webp";
import CheckIcon from "../assets/icons/check-icon.svg";
import "../assets/css/OurServices.css";

const OurServices = () => {
  return (
    <section className="our-services" id="our-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="img-service">
              <img src={ImgServices} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="services-desc">
              <h3>Best Car Rental for any kind of trip in Indonesia!</h3>
              <p>
                Sewa mobil di Indonesia bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <img src={CheckIcon} alt="" />
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              </ul>
              <ul>
                <img src={CheckIcon} alt="" />
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              </ul>
              <ul>
                <img src={CheckIcon} alt="" />
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
              </ul>
              <ul>
                <img src={CheckIcon} alt="" />
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
              </ul>
              <ul>
                <img src={CheckIcon} alt="" />
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
