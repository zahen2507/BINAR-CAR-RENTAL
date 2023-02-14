import { useState, React } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Loginkanan from "../assets/images/login.svg";
import Logologin from "../assets/images/logo.svg";
import Closelogo from "../assets/images/close.svg";
import "../assets/css/SignIn.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/login", {
        email,
        password,
      })
      .then((res) => {
        window.localStorage.setItem("access_token", res.data.access_token);
        window.localStorage.setItem("email_customer", res.data.email);
        window.location.href = "/";
      })
      .catch((e) => console.log(e));
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
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3 email" controlId="formBasicEmail">
                    <Form.Label>
                      <h3>Email</h3>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Contoh: johndee@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
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
                      placeholder="6+ karakter"
                      onChange={(e) => setPassword(e.target.value)}
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

export default Signin;
