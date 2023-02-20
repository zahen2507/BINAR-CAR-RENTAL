import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { currencyFormat } from "../helper";
import { DateRangePicker } from "rsuite";
import Axios from "axios";
import moment from "moment";
import "moment/locale/id";
import Button from "react-bootstrap/Button";
import Skeleton from "react-loading-skeleton";
import Filter from "../components/Filter";
import placeholderImg from "../assets/images/placeholder-img.webp";
import UserIcon from "../assets/icons/user-icon.svg";
import "../assets/css/DetailMobil.css";

const DetailMobil = () => {
  const [detail, setDetail] = useState({});
  const [dateRange, setDateRange] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;
  let { id } = useParams();
  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com/customer";
  const fetch = useRef(true);
  moment.locale("id");

  const handleChange = (update) => {
    setButtonDisabled(false);
    setDateRange(update);
  };

  const handleClose = () => {
    setButtonDisabled(true);
  };
  const handleSubmit = () => {
    const totalhari = moment(dateRange[1]).diff(moment(dateRange[0]), "days");
    const mulaiSewa = moment(dateRange[0]).format("dddd, DD MMMM YYYY");
    const akhirSewa = moment(dateRange[1]).format("dddd, DD MMMM YYYY");
    console.log(totalhari);
    window.localStorage.setItem("start_rent", dateRange[0]);
    window.localStorage.setItem("end_rent", dateRange[1]);
    window.localStorage.setItem("Jumlah_Hari", totalhari);
    window.localStorage.setItem("mulai_sewa", mulaiSewa);
    window.localStorage.setItem("akhir_sewa", akhirSewa);
    window.location.href = `/payment/${id}`;
  };

  const getDetail = (id) => {
    Axios.get(`${baseUrl}/car/${id}`)
      .then((response) => {
        setDetail(response.data);
        window.localStorage.setItem("car_name", response.data.name);
        window.localStorage.setItem("car_price", response.data.price);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(id);
    }
  }, [id]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <section>
      <div className="backButton"></div>
      <Filter />
      <div className="car-desc">
        <div className="container">
          <div className="car-desc-border">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="package-desc">
                  {isLoading ? (
                    <Skeleton style={{ height: "850px" }} />
                  ) : (
                    <div className="card">
                      <h3>Tentang Paket</h3>
                      <h4>Include</h4>
                      <ul>
                        <li>
                          Apa saja yang termasuk dalam paket misal durasi max 12
                          jam
                        </li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                      </ul>
                      <h4>Exclude</h4>
                      <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                      <h3>Refund, Reschedule, Overtime</h3>
                      <ul>
                        <li>
                          Tidak termasuk biaya makan sopir Rp 75.0000/hari
                        </li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>
                          Tidak termasuk biaya makan sopir Rp 75.0000/hari
                        </li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>
                          Tidak termasuk biaya makan sopir Rp 75.0000/hari
                        </li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="card-detail">
                  {isLoading ? (
                    <Skeleton style={{ height: "680px" }} />
                  ) : (
                    <div className="card">
                      <img
                        src={
                          detail.image !== null ? detail.image : placeholderImg
                        }
                        className="card-img"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{detail.name}</h5>
                        <div className="category">
                          <img src={UserIcon} alt="" />
                          <p>
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
                        <div className="datebox">
                          <h3>Tentukan lama sewa mobil (max. 7 hari)</h3>
                          <div className="date">
                            <DateRangePicker
                              // onChange={handleChange}
                              onChange={(update) => handleChange(update)}
                              onClean={() => handleClose()}
                              format="dd MMM yyy"
                              size="lg"
                              block
                              placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
                              showOneCalendar
                              appearance="default"
                              disabledDate={combine(
                                allowedMaxDays(7),
                                beforeToday()
                              )}
                            />
                          </div>
                        </div>

                        <div className="price">
                          <h4>Total</h4>
                          <h4>Rp {currencyFormat(detail.price)}</h4>
                        </div>

                        <Button
                          variant="success"
                          size="lg"
                          onClick={() => handleSubmit()}
                          disabled={buttonDisabled}
                        >
                          Lanjutkan Pembayaran
                        </Button>

                        <div className="backButton2">
                          <Link to={-1} className="btn">
                            KEMBALI
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMobil;
