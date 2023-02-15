import { React, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import APIAuth from "../apis/APIAuth";
import Loginkanan from "../assets/images/login.svg";
import Logologin from "../assets/images/logo.svg";
import Closelogo from "../assets/images/close.svg";
import "../assets/css/SignIn.css";
// import { useState } from "react";
// import axios from "axios";

const SignIn = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Sign In for Rent";
  }, []);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     axios
  //       .post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/login", {
  //         email,
  //         password,
  //       })
  //       .then((res) => {
  //         window.localStorage.setItem("access_token", res.data.access_token);
  //         window.localStorage.setItem("email_customer", res.data.email);
  //         window.location.href = "/find-car";
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

    const payload = {
      email,
      password,
    };
    const handleSubmit = async () => {
      try {
        await APIAuth.login(payload);
        alert("Login Success!");
        let returnTo = "/";
        const params = new URLSearchParams(search);
        const redirectTo = params.get("return_to");
        if (redirectTo) returnTo += `${redirectTo}`;
        setTimeout(() => {
          navigate(returnTo);
        }, 1000);
      } catch (error) {
        const err = new Error(error);
        console.log(err.response.data);
      }
    };
    handleSubmit();
  };

  return (
    <div className="login">
      <Container fluid>
        <Row>
          <Col className="login-kiri" sm={12} lg={6} xl={6}>
            <div className="login-box">
              <div className="login-konten">
                <div className="logo-login">
                  <a href="/">
                    <img src={Logologin} alt="BCR" className="homelogo" />
                  </a>
                  <Link to={"/"}>
                    <img src={Closelogo} alt="close" className="closelogo" />
                  </Link>
                </div>
                <h1>Welcome Back! </h1>
                <Form onSubmit={onFinish}>
                  <Form.Group className="mb-3 email" controlId="formBasicEmail">
                    <Form.Label>
                      <h3>Email</h3>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Contoh: johndee@gmail.com"
                      //   onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <Form.Text className="text-muted">
                                We'll........... nev,,,,,,,er share your email with anyone else.
                                </Form.Text> */}
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
                      //   onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                      <h2>Sign In</h2>
                    </Button>
                  </div>
                </Form>
                <div className="bawah-button">
                  <h3>Don’t have an account?</h3>
                  <h4>
                    <Link to="/sign-up" relative="path">
                      Sign Up for free
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col className="login-kanan" sm={0} lg={6} xl={6}>
            <img src={Loginkanan} alt="Login" title="loginpage" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
