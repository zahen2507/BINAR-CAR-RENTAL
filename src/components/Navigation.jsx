import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Navigation.css";
import Logo from "../assets/images/logo.svg";
import Menu from "../assets/icons/menu.png";
import CloseButton from "../assets/icons/close.svg";

const Header = () => {
  const location = useLocation();
  const show = location.pathname === "/" ? true : false;
  const [active, setActive] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  const openSidebar = () => {
    setActive(true);
  };
  const closeSidebar = () => {
    setActive(false);
  };

  function LogoutButton() {
    const handleClick = () => {
      localStorage.clear();
    };

    return (
      <Link to="/" onClick={handleClick} className="btn logoutbtn">
        Log out
      </Link>
    );
  }

  function RegisterButton() {
    return (
      <Link to={"/sign-up"} className="btn">
        Register
      </Link>
    );
  }

  return (
    <header className="header-nav">
      <div className="container">
        <div className="row">
          <a href="/" className="logo">
            <img src={Logo} alt="" />
          </a>
          {show ? (
            <>
              <div className={`overlay-bg ${active ? "navbar-active" : ""}`} />
              <div className={`sidebar ${active ? "navbar-active" : ""}`}>
                <div className="top-sidebar">
                  <Link to={"/"} className="logo-sidebar">
                    <img src={Logo} alt="" />
                  </Link>
                  <div className="close-button" onClick={closeSidebar}>
                    <img className="" src={CloseButton} alt="" />
                  </div>
                </div>
                <ul className="navbar">
                  <li>
                    <a href="#our-services">Our Services</a>
                  </li>
                  <li>
                    <a href="#why-us">Why Us</a>
                  </li>
                  <li>
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li className="buttonregist">
                    {accessToken ? <LogoutButton /> : <RegisterButton />}
                  </li>
                </ul>
              </div>
              <div className="burger-icon" onClick={openSidebar}>
                <img src={Menu} alt="" />
              </div>
            </>
          ) : (
            <>
              <div className={`overlay-bg ${active ? "navbar-active" : ""}`} />
              <div className={`sidebar ${active ? "navbar-active" : ""}`}>
                <div className="top-sidebar">
                  <Link to={"/"} className="logo-sidebar">
                    <img src={Logo} alt="" />
                  </Link>
                  <div className="close-button" onClick={closeSidebar}>
                    <img className="" src={CloseButton} alt="" />
                  </div>
                </div>
                <ul className="navbar">
                  <li>
                    <a href="/#our-services">Our Services</a>
                  </li>
                  <li>
                    <a href="/#why-us">Why Us</a>
                  </li>
                  <li>
                    <a href="/#testimonial">Testimonial</a>
                  </li>
                  <li>
                    <a href="/#faq">FAQ</a>
                  </li>
                  <li className="buttonregist">
                    {accessToken ? <LogoutButton /> : <RegisterButton />}
                  </li>
                </ul>
              </div>
              <div className="burger-icon" onClick={openSidebar}>
                <img src={Menu} alt="" />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
