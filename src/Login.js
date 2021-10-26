import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signng-in you agree to Amazon's FAKe Clone Condition of use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Intrest-BAsed Ads Notice
        </p>
        <button className="login__regesterButton">
          Create an Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
