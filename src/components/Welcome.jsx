import React from "react";
import { Link } from "react-router-dom";
import HeroThumbnail from "../assets/images/img_car.webp";
import "../assets/css/Welcome.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero-section">
      <div className="container">
        <div className="col-lg-6">
          <div className="hero-content">
            <h1>Sewa & Rental Mobil Terbaik di Seluruh Indonesia</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {window.location.pathname === "/" && (
              <Link to={"/cari-mobil"} className="btn">
                Mulai Sewa Mobil
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="hero-thumbnail">
        <img src={HeroThumbnail} alt="thumbnail-car" />
      </div>
    </section>
  );
};

export default HeroSection;
