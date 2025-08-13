import React, { useState } from "react";
import "../CSS/loginSignup.css";

export const LoginSignup = () => {
  let usersData = {
    name: "",
    email: "",
    password: "",
  };
  const [userSignUpData, setUserSignUpData] = useState(usersData);

  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" name="" id="" placeholder="Your name" />
          <input type="email" name="" id="" placeholder="Email Address" />
          <input type="password" name="" id="" placeholder="Password" />
          <button>Continue</button>
          <p className="loginSignup-login">
            Already have an account ? <span>Login here</span>
          </p>
        </div>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the term of use & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
