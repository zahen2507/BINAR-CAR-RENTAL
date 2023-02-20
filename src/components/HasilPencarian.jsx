import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { queryData, currencyFormat } from "./../helper";
import Filter from "./Filter";
import noCar from "../assets/images/no-car.webp";
import placeholderImg from "..//assets/images/placeholder-img.webp";
import "../assets/css/HasilPencarian.css";
import Skeleton from "react-loading-skeleton";

const FindResult = ({ setHeroVisible }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emptyData, setEmptyData] = useState(false);

  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com/customer";

  const getCars = () => {
    Axios.get(`${baseUrl}/car`)
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const fetch = useRef(true);

  useEffect(() => {
    if (fetch.current) {
      getCars();
      fetch.current = false;
    }
  }, []);

  const carName = useRef("");
  const category = useRef("");
  const priceRange = useRef("");
  const statusOrder = useRef("");

  const price = () => {
    switch (priceRange.current.value) {
      case "small":
        return { maxPrice: 400000 };
      case "medium":
        return { minPrice: 400000, maxPrice: 600000 };
      case "large":
        return { minPrice: 600000 };
      default:
        return "";
    }
  };

  const getData = (e) => {
    e.preventDefault();

    const params = {
      name: carName.current.value,
      category: category.current.value,
      minPrice: price().minPrice,
      maxPrice: price().maxPrice,
      isRented: statusOrder.current.value,
    };

    setLoading(true);
    setEmptyData(false);
    setCars([]);

    Axios.get(`${baseUrl}/v2/car?${queryData(params)}`)
      .then((response) => {
        if (response.data.cars.length > 0) {
          setCars(response.data.cars);
        } else {
          setEmptyData(true);
        }
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const filterData = {
    getData,
    carName,
    category,
    priceRange,
    statusOrder,
    setHeroVisible,
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="findResult">
      <div className="container">
        <div className="car-choice">
          <Filter {...filterData} />
          {loading ? (
            <div className="rotating-lines-loading">
              <RotatingLines
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass="rotating-lines-loading"
                strokeWidth="5"
                animationDuration="0.75"
                visible={true}
              />
            </div>
          ) : (
            <div className="container">
              <div className="car-choice-border">
                <div className="row">
                  {cars.map((car, index) => {
                    return (
                      <div className="col-lg-4 col-md-6" key={index}>
                        {isLoading ? (
                          <Skeleton
                            style={{ marginBottom: "20px", height: "420px" }}
                          />
                        ) : (
                          <div className="card-border">
                            <div className="card">
                              <img
                                src={
                                  car.image !== null
                                    ? car.image
                                    : placeholderImg
                                }
                                className="card-img-top"
                                alt="..."
                              />

                              <div className="card-body">
                                <h5 className="card-title">{car.name}</h5>
                                <h4 className="price">
                                  Rp {currencyFormat(car.price)} / hari
                                </h4>
                                <p className="card-text">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.{" "}
                                </p>
                                <Link
                                  className="btn"
                                  to={`/detail-mobil/${car.id}`}
                                >
                                  Pilih Mobil
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {emptyData && (
            <div className="noData">
              <img src={noCar} alt=".." />
              <h3>Mobil yang kamu cari tidak ditemukan</h3>
              <h4>
                &lsquo;Coba ubah kata kunci atau filter yang kamu gunakan&rsquo;
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindResult;
