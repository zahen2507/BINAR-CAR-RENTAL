import React from "react";
import Logo from "../assets/images/logo.svg";
import { currencyFormat } from "../helper";
import "../assets/css/Invoice.css";

const Invoice = () => {
  const mulaiSewa = localStorage.getItem("mulai_sewa");
  const akhirSewa = localStorage.getItem("akhir_sewa");
  const totalHari = localStorage.getItem("Jumlah_Hari");
  const namaCustomer = localStorage.getItem("name_customer");
  const emailCustomer = localStorage.getItem("email_customer");
  const carName = localStorage.getItem("car_name");
  const carPrice = localStorage.getItem("car_price");
  const Total = carPrice * totalHari;
  const orderID = localStorage.getItem("order_id");
  let bank = localStorage.getItem("bank");
  let dataBank = [{}];

  switch (bank) {
    case "BCA":
      dataBank = [
        {
          id: 1,
          name: "BCA",
          desc: "BCA Transfer",
        },
      ];
      break;
    case "BNI":
      dataBank = [
        {
          id: 2,
          name: "BNI",
          desc: "BNI Transfer",
        },
      ];
      break;
    case "Mandiri":
      dataBank = [
        {
          id: 3,
          name: "Mandiri",
          desc: "Mandiri Transfer",
        },
      ];
      break;
    default:
      break;
  }

  const d_names = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const m_names = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return (
    <div className="invoice">
      <div className="invoice-hero">
        <div className="invoice-date">
          <h1>INVOICE</h1>
          <p>
            Date:{" "}
            {d_names[day] +
              ", " +
              (parseInt(date) < 10 ? "0" + date : date) +
              " " +
              m_names[month] +
              " " +
              year}
          </p>
        </div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="payment-details">
        <h2>PAYMENT DETAILS</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Order ID</p>
              <p>Method</p>
              <p>Status</p>
            </div>
            <div className="col-9">
              <p>
                : {year}-{orderID}
              </p>
              {dataBank.map((x, key) => {
                return <p key={key}>: {x.desc}</p>;
              })}
              <p>: Paid</p>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-details">
        <h2>CUSTOMER DETAILS</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Name</p>
              <p>Email</p>
              <p>Contact Number</p>
            </div>
            <div className="col-9">
              <p>: {namaCustomer === null ? "Customer" : namaCustomer}</p>
              <p>: {emailCustomer}</p>
              <p>: +6281234567890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="company-details">
        <h2>COMPANY DETAILS</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Name</p>
              <p>Email</p>
              <p>Address</p>
            </div>
            <div className="col-9">
              <p>: Binar Car Rental</p>
              <p>: binarcarrental@gmail.com</p>
              <p>
                : Jalan Suroyo No. 161
                <br />
                &nbsp;&nbsp;Mayangan Kota Probolonggo
                <br />
                &nbsp;&nbsp;672000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="purchase-details">
        <h2>PURCHASE DETAILS</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Car Description</p>
              <p>Start Rent</p>
              <p>End Rent</p>
              <p>Car Rental Time</p>
              <p>Daily Rate</p>
              <h4>Payment Amount</h4>
            </div>
            <div className="col-9">
              <p>: {carName}</p>
              <p>: {mulaiSewa}</p>
              <p>: {akhirSewa}</p>
              <p>: {totalHari} Days</p>
              <p>: Rp {currencyFormat(carPrice)}</p>
              <h4>: Rp {currencyFormat(Total)}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>&copy; Copyright Binar 2022</h4>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Invoice;
