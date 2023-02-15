import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{ textAlign: "center", paddingTop: "20vh" }}
      role="notFoundPage"
    >
      <h1
        style={{
          color: "#0d28a6",
          fontWeight: 900,
          fontSize: "300px",
          fontFamily: "monospace",
        }}
      >
        404
      </h1>
      <h1
        style={{
          fontWeight: 700,
          fontFamily: "serif",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        PAGE NOT FOUND
      </h1>
      <em>Maybe you entered the wrong word</em>
      <br />
      <div style={{ marginTop: "24px" }}>
        <Link to="/">
          <bold
            style={{
              fontFamily: "cursive",
              fontWeight: "700",
              color: "rgb(13, 40, 166)",
            }}
          >
            Back To Home
          </bold>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
