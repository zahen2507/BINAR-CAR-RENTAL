import React from "react";
import Ticket from "../components/Ticket";
import { Helmet } from "react-helmet";

const ETicket = () => {
  return (
    <>
      <Helmet>
        <title>E-Ticket</title>
        <meta name="description" content="E-ticket penyewaan mobil" />
        <meta
          name="keywords"
          content="sewa mobil, car rental, binar, binar car rental, penyewaan mobil, cari mobil, binar, rental car, sewa mobil murah, cheap car rental, website sewa mobil"
        />
      </Helmet>
      <Ticket />
    </>
  );
};

export default ETicket;
