import React from "react";
import PaymentDesc from "../components/PaymentDesc";
import { Helmet } from "react-helmet";

const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Pembayaran Mobil</title>
        <meta name="description" content="Pilih bank dan lakukan pembayaran" />
        <meta
          name="keywords"
          content="sewa mobil, car rental, binar, binar car rental, penyewaan mobil, cari mobil, binar, rental car, sewa mobil murah, cheap car rental"
        />
      </Helmet>
      <PaymentDesc />
    </>
  );
};

export default Payment;
