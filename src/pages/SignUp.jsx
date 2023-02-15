import { React, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import APIReg from "../apis/APIReg";
import Signupkanan from "../assets/images/login.svg";
import Logoregister from "../assets/images/logo.svg";
import Closelogo from "../assets/images/close.svg";
import "../assets/css/SignUp.scss";
// import { useState } from "react";
// import axios from "axios";

const SignUp = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Sign Up for Rent";
  }, []);
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleChange = (event) => {
  //     setName(event.target.value);
  //     localStorage.setItem("name_customer", event.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     axios
  //       .post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/register", {
  //         email,
  //         password,
  //       })
  //       .then((res) => {
  //         window.location.href = "/sign-in";
  //         console.log(res);
  //       })
  //       .catch((e) => console.log(e));
  //   };

  const navigate = useNavigate();
  const { search } = useLocation();
  const onFinish = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const role = "customer";

    const payload = {
      email,
      password,
      role,
    };
    const handleRegister = async () => {
      try {
        await APIReg.register(payload);
        alert("Registeration Success!");
        let returnTo = "/sign-in";
        const params = new URLSearchParams(search);
        const redirectTo = params.get("return_to");
        if (redirectTo) returnTo += `${redirectTo}`;
        setTimeout(() => {
          navigate(returnTo);
        }, 1000);
        console.log(payload);
      } catch (error) {
        const err = new Error(error);
        console.log(err.response.data);
      }
    };
    handleRegister();
  };

  return (
    <div className="signup">
      <Container fluid>
        <Row>
          <Col className="signup-kiri" sm={12} lg={6} xl={6}>
            <div className="signup-box">
              <div className="signup-konten">
                <div className="logo-signup">
                  <a href="/">
                    <img src={Logoregister} alt="BCR" className="homelogo" />
                  </a>
                  <Link to={"/"}>
                    <img src={Closelogo} alt="close" className="closelogo" />
                  </Link>
                </div>
                <h1>Sign Up</h1>
                <Form onSubmit={onFinish}>
                  <Form.Group className="mb-3 name" controlId="formBasicName">
                    <Form.Label>
                      <h3>Name</h3>
                    </Form.Label>
                    <Form.Control
                      // value={name}
                      type="name"
                      placeholder="Nama Lengkap"
                      className="namaform"
                      // onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 email" controlId="formBasicEmail">
                    <Form.Label>
                      <h3>Email</h3>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Contoh: johndee@gmail.com"
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 password"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>
                      <h3>Password</h3>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="6+ karakter"
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                      <h2>Sign Up</h2>
                    </Button>
                  </div>
                </Form>
                <div className="bawah-button">
                  <h3>Already have an account?</h3>
                  <h4>
                    <Link to="/sign-in" relative="path">
                      Sign In here
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col className="signup-kanan" sm={0} lg={6} xl={6}>
            <img src={Signupkanan} alt="signup" title="registerpage" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;