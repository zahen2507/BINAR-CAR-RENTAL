import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Banner.css";

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-body">
          <h1>Sewa Mobil di Seluruh Indonesia Sekarang</h1>
          <p>
            Daftarkan akun Anda di Binar Car Rental. Temukan berbagai mobil
            sesuai keinginanmu. Mulai sewa selama yang Anda mau! {" "}
          </p>
          <Link to={"/cari-mobil"} className="btn">
            Mulai Sewa Mobil
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
