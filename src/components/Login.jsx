import React from "react";
import { loginUrl } from "../spotify";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      {/* Spotify Logo */}
      <div className="login__container">
        <img src="logo.svg" alt="logo" className="login__logo" />
        <h1>Spotify</h1>
      </div>
      {/* Spotify Login*/}
      <a href={loginUrl} className="login__Btn">
        login spotify
      </a>
    </div>
  );
};

export default Login;
