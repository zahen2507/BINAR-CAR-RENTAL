import React from "react";
import BankPayment from "../components/BankPayment";
import { Helmet } from "react-helmet";

const BankConfirm = () => {
  return (
    <>
      <Helmet>
        <title>Konfirmasi Pembayaran</title>
        <meta
          name="description"
          content="Lakukan konfirmasi pembayaran, upload bukti pembayaran"
        />
        <meta
          name="keywords"
          content="sewa mobil, car rental, binar, binar car rental, penyewaan mobil, cari mobil, binar, rental car, sewa mobil murah, cheap car rental"
        />
      </Helmet>
      <BankPayment />
    </>
  );
};

export default BankConfirm;
