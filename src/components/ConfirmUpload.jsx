import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlaceHolder from "../assets/images/holder.png";
import Count10Minute from "./Count10Minute";
import "../assets/css/ConfirmUpload.css";
import APIOrder from "../apis/APIOrder";

const ConfirmUpload = ({ orderId }) => {
  const reader = new FileReader();
  const [img, setImg] = useState(PlaceHolder);

  const imageHandler = (e) => {
    reader.onload = function (e) {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("slip", img);
    console.log(formData.get("slip"));
    let response = await APIOrder.uploadPaymentSlip(orderId, formData);
    console.log(response);
  };

  return (
    <section className="confirm-upload">
      <div className="confirm-count">
        <h3>Konfirmasi Pembayaran</h3>
        <Count10Minute />
      </div>
      <p>
        Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan
        segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan
        konfirmasi.
      </p>
      <h4>Upload Bukti Pembayaran</h4>
      <p>
        Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload
        bukti bayarmu
      </p>
      <div className="upload-img">
        <div className="img">
          <img src={img} alt="upload-img" />
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={imageHandler}
        />
      </div>
      {img === PlaceHolder ? (
        <button
          onClick={() => `if (reader.readyState === 2) {
          setImg(reader.result);
        }`}
        >
          <label htmlFor="input">Upload</label>
        </button>
      ) : (
        <Link onClick={onFileUpload} to={"/payment/bank-confirm/e-ticket"}>
          Konfirmasi
        </Link>
      )}
    </section>
  );
};

export default ConfirmUpload;
