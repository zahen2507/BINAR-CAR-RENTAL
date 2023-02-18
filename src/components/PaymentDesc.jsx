import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import Rect from "../assets/icons/rect.svg";
import Check from "../assets/icons/check.svg";
import UserIcon from "../assets/icons/user-icon.svg";
import UpDown from "../assets/icons/up-down.svg";
import { currencyFormat } from "../helper";
import moment from "moment";
import "moment/locale/id";
import "../assets/css/PaymentDesc.css";
import Auth from "../utils/Auth";

const PaymentDesc = () => {
  const [selected, setSelected] = useState();
  const selectClick = (index) => {
    setSelected(index);
  };
  const [isToggled, setIsToggled] = useState(true);
  const styleToggled = {
    transform: isToggled ? "rotate(180deg)" : "",
    transition: "transform 500ms ease",
  };
  const styleLink = { background: "#5CB85F" };
  const mulaiSewa = localStorage.getItem("mulai_sewa");
  const akhirSewa = localStorage.getItem("akhir_sewa");
  const totalHari = localStorage.getItem("Jumlah_Hari");
  const startRent = localStorage.getItem("start_rent");
  const endRent = localStorage.getItem("end_rent");
  const token = Auth.getAccessToken();
  const id_car = localStorage.getItem("id_car");
  const [detail, setDetail] = useState({});
  let { id } = useParams();
  const fetch = useRef(true);
  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com/customer";
  const Total = detail.price * totalHari;
  moment.locale("id");

  const getDetail = (id) => {
    Axios.get(`${baseUrl}/car/${id}`)
      .then((response) => {
        setDetail(response.data);
        localStorage.setItem("id_car", response.data.id);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(id);
    }
  }, [id]);

  const postCustomerOrder = async () => {
    try {
      const response = await Axios.post(
        `${baseUrl}/order`,
        {
          start_rent_at: startRent,
          finish_rent_at: endRent,
          car_id: id_car,
        },
        {
          headers: {
            access_token: token,
          },
        }
      );
      window.localStorage.setItem("order_id", response.data.id);
      window.localStorage.setItem("Total_Harga", Total);
    } catch (error) {
      console.log(error.response);
      alert("Failed to order");
    }
  };

  return (
    <section className="payment-desc">
      <div className="bg" />
      <div className="container">
        <div className="payment-nav">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="back-button">
                  <Link to={-1}>
                    <img src={ArrowLeft} alt="back to detail mobil" />
                  </Link>
                  <h3>Pembayaran</h3>
                </div>
              </div>
              <div className="col-md-8">
                <div className="state-payment">
                  <div className="one">1</div>
                  <h5>Pilih Metode</h5>
                  <img src={Rect} alt="-" />
                  <div className="two">2</div>
                  <h5>Bayar</h5>
                  <img src={Rect} alt="-" />
                  <div className="three">3</div>
                  <h5>Tiket</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-disabled">
          <div className="container">
            <div className="disabled">
              <div className="col-12">
                <div className="row">
                  <h3>Detail Pesananmu</h3>
                  <div className="col-lg-3">
                    <h4>Nama/Tipe Mobil</h4>
                    <div className="car-name">{detail.name}</div>
                  </div>
                  <div className="col-lg-3">
                    <h4>Kategori</h4>
                    <div className="category">
                      {(() => {
                        switch (detail.category) {
                          case "small":
                            return "2-4 orang";
                          case "medium":
                            return "4-6 orang";
                          case "large":
                            return "6-8 orang";
                          default:
                            return "-";
                        }
                      })()}
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <h4>Tanggal Mulai Sewa</h4>
                    <div className="start-rent">{mulaiSewa}</div>
                  </div>
                  <div className="col-lg-3">
                    <h4>Tanggal Akhir Sewa</h4>
                    <div className="finish-rent">{akhirSewa}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-detail">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="choose-bank">
                  <h3>Pilih Bank Transfer</h3>
                  <p>
                    Kamu bisa membayar dengan transfer melalui ATM, Internet
                    Banking atau Mobile Banking
                  </p>
                  <ul>
                    <li
                      className={selected === 1 ? "active" : null}
                      onClick={() => {
                        selectClick(1);
                        localStorage.setItem("bank", "BCA");
                      }}
                    >
                      <div className="cont">
                        <div className="bank">BCA</div>
                        <h5>BCA Transfer</h5>
                      </div>
                      {selected === 1 ? (
                        <img src={Check} alt="check-list" />
                      ) : null}
                    </li>
                    <li
                      className={selected === 2 ? "active" : null}
                      onClick={() => {
                        selectClick(2);
                        localStorage.setItem("bank", "BNI");
                      }}
                    >
                      <div className="cont">
                        <div className="bank">BNI</div>
                        <h5>BNI Transfer</h5>
                      </div>
                      {selected === 2 ? (
                        <img src={Check} alt="check-list" />
                      ) : null}
                    </li>
                    <li
                      className={selected === 3 ? "active" : null}
                      onClick={() => {
                        selectClick(3);
                        localStorage.setItem("bank", "Mandiri");
                      }}
                    >
                      <div className="cont">
                        <div className="bank">Mandiri</div>
                        <h5>Mandiri Transfer</h5>
                      </div>
                      {selected === 3 ? (
                        <img src={Check} alt="check-list" />
                      ) : null}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="detail-payment">
                  <h5>{detail.name}</h5>
                  <div className="category">
                    <img src={UserIcon} alt="" />
                    <p>
                      {" "}
                      {(() => {
                        switch (detail.category) {
                          case "small":
                            return "2-4 orang";
                          case "medium":
                            return "4-6 orang";
                          case "large":
                            return "6-8 orang";
                          default:
                            return "-";
                        }
                      })()}
                    </p>
                  </div>
                  <div className="calc">
                    <div className="total-calc">
                      <div className="total">
                        <h5>Total</h5>
                        <img
                          src={UpDown}
                          onClick={() => setIsToggled(!isToggled)}
                          style={styleToggled}
                          alt="see calculation"
                        />
                      </div>
                      <h5>Rp {currencyFormat(Total)}</h5>
                    </div>
                    {isToggled ? (
                      <div className="detail">
                        <h5 className="title">Harga</h5>
                        <ul>
                          <li>
                            <p>
                              Sewa Mobil Rp {currencyFormat(detail.price)} x{" "}
                              {totalHari}
                            </p>
                            <h5>Rp {currencyFormat(Total)}</h5>
                          </li>
                        </ul>
                        <h5 className="title">Biaya Lainnya</h5>
                        <ul>
                          <li>
                            <p>Pajak</p>
                            <h6>Termasuk</h6>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <p>Biaya makan sopir</p>
                            <h6>Termasuk</h6>
                          </li>
                        </ul>
                        <h5 className="title">Belum Termasuk</h5>
                        <ul>
                          <li>
                            <p>Bensin</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <p>Tol dan parkir</p>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>
                  <div className="result-calc">
                    <h4>Total</h4>
                    <h4>Rp {currencyFormat(Total)}</h4>
                  </div>
                  <Link
                    style={selected ? styleLink : {}}
                    to={selected ? "/payment/bank-confirm" : "#"}
                    onClick={postCustomerOrder}
                  >
                    Bayar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDesc;
