import React from "react";
import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import CariMobil from "../pages/CariMobil";
import DetailMobil from "../pages/DetailMobil";
import Signup from "../pages/SignUp";
import Signin from "../pages/SignIn";
import Payment from "../pages/Payment";
import BankConfirm from "../pages/BankConfirm";
import ETicket from "../pages/ETicket";
import NotFoundPage from "../components/NotFoundPage";

const WithAuth = () => {
  const isAuth = window.localStorage.getItem("access_token");
  return (
    <>
      {!isAuth && <Navigate to={"/sign-up"} />}
      <Outlet />
    </>
  );
};

const SetUpRouter = () => {
  const location = useLocation();

  return (
    <div className="App">
      {/* {["/sign-in", "/sign-up"].indexOf(window.location.pathname) === -1 && <Navigation />} */}

      {location.pathname !== "/sign-in" && location.pathname !== "/sign-up" && (
        <Navigation />
      )}

      <Routes>
        {/* Public */}
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/" element={<HomePage />} />

        {/* WithAuth  */}
        <Route element={<WithAuth />}>
          <Route path="/cari-mobil" element={<CariMobil />} />
          <Route path="/detail-mobil/:id" element={<DetailMobil />} />
          <Route path="/payment/bank-confirm" element={<BankConfirm />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/payment/bank-confirm/e-ticket" element={<ETicket />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {location.pathname !== "/sign-in" && location.pathname !== "/sign-up" && (
        <Footer />
      )}
    </div>
  );
};

export default SetUpRouter;
