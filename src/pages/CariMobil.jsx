import { React, useState } from "react";
import { Helmet } from "react-helmet";
import Welcome from "../components/Welcome";
import FindResult from "../components/HasilPencarian";
import Greyarea from "../components/GreyArea";

const FindCar = () => {
  const [heroVisible, setHeroVisible] = useState(true);

  return (
    <div className="find-car">
      <Helmet>
        <title>Cari Mobil</title>
        <meta
          name="description"
          content="Cari mobil sesuai dengan keinginanmu disini!"
        />
        <meta
          name="keywords"
          content="sewa mobil, car rental, binar, binar car rental, penyewaan mobil, cari mobil, binar, rental car, sewa mobil murah, cheap car rental, website sewa mobil"
        />
      </Helmet>
      {!heroVisible && <Greyarea />}
      {heroVisible && <Welcome />}
      <FindResult setHeroVisible={setHeroVisible} />
    </div>
  );
};

export default FindCar;
