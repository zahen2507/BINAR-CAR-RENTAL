import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import PlaceHolder from "../assets/images/holder.png";
import Count10Minute from "./Count10Minute";
import "../assets/css/ConfirmUpload.css";
import APIOrder from "../apis/APIOrder";

const ConfirmUpload = ({ orderId }) => {
  const reader = new FileReader();
  const navigate = useNavigate();
  const [img, setImg] = useState(PlaceHolder);

  const imageHandler = (e) => {
    reader.onload = function (e) {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("slip"));
    try {
      let response = await APIOrder.uploadPaymentSlip(orderId, formData);
      console.log(response);
      if (response.status === 200) {
        navigate(`e-ticket`);
      }
    } catch (error) {
      console.error(error);
    }
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
      <Form onSubmit={onSubmit} className="upload-img">
        <div className="img">
          <img src={img} alt="upload-img" />
        </div>
        <Form.Group controlId="slipUpload">
          <Form.Control
            name="slip"
            type="file"
            accept="image/*"
            onChange={imageHandler}
            hidden
          />
        </Form.Group>
        {img === PlaceHolder ? (
          <Button
            type="button"
            onClick={() => `if (reader.readyState === 2) {
          setImg(reader.result);
        }`}
          >
            <label htmlFor="slipUpload">Upload</label>
          </Button>
        ) : (
          <Button type="submit">Konfirmasi</Button>
        )}
      </Form>
    </section>
  );
};

export default ConfirmUpload;
