import React from "react";
import aktielogoo from "../Login/img/aktielogoo.png";
import "./Register.css";
import { Link } from "react-router-dom";

const Registration = (props) => {
  const checkAccount = (e) => {
    e.preventDefault();
    if (
      e.target.elements.password.value ===
      e.target.elements.confirmPassword.value
    ) {
      props.setUsername(e.target.elements.username.value);
      props.setPassword(e.target.elements.password.value);
      props.setEmail(e.target.elements.email.value);
      alert("created new account");
    } else {
      alert("Password does not match");
    }
  };
  return (
    <div id="registrationDiv" className="loginMenuPages">
      <img id="logo" src={aktielogoo} alt="logo" />
      <form onSubmit={checkAccount}>
        <p> Registrera ett konto</p>
        <br />
        <p>Username:</p>
        <input id="username" type="text" required />
        <p>email:</p>
        <input id="email" type="text" required />
        <p>Password:</p>
        <input id="password" type="password" required />
        <p>Confirm password:</p>
        <input id="confirmPassword" type="password" required />
        <br />
        <br />
        <button>Register</button>
      </form>
      <div id="link">
        <Link to="/">Start page</Link>
      </div>
    </div>
  );
};
export default Registration;