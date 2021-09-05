import React from "react";
import GoogleAuth from "../Auth";
import loginImage from "../Img/loginImage.jpg"
import "../header.css";

const Header = () => {
  return (
    <>
      <h1 className="textCenter">Loan Management System</h1>
      <div className="Container">
        <img src={loginImage} alt="LoginPage" />
        <div className="loginDiv">
          <h3>Log In</h3>
          <GoogleAuth />
        </div>
      </div>
    </>
  );
};

export default Header;
