import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Auth from "../utils/Auth";
import "../assets/css/Navigation.css";

const ButtonLogout = () => {
  const navigate = useNavigate();
  return (
    <Link
      to="/sign-in"
      onClick={() => Auth.logOut(navigate)}
      className="btn logoutbtn"
    >
      Log out
    </Link>
  );
};

export default ButtonLogout;