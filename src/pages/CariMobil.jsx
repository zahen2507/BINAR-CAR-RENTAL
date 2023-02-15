import { React, useState } from "react";
import Welcome from "../components/Welcome";
import FindResult from "../components/HasilPencarian";
import Greyarea from "../components/GreyArea";

const FindCar = () => {
  const [heroVisible, setHeroVisible] = useState(true);

  return (
    <div className="find-car">
      {!heroVisible && <Greyarea />}
      {heroVisible && <Welcome />}
      <FindResult setHeroVisible={setHeroVisible} />
    </div>
  );
};

export default FindCar;
