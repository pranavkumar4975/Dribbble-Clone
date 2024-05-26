import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const navigate = useNavigate();
  function Signin() {
    navigate("/loginsignup");
  }
  function Signup() {
    if (!name || !password || !user || !repassword) {
      alert("Enter Valid Details");
      return;
    }
    alert("User Registered Successfully");
    navigate("/loginsignup");
  }
  return (
    <div className="register">
      <div className="container">
        <div className="back">
          <div className="sign-message">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button onClick={Signin}>Sign in</button>
          </div>
        </div>
        <div className="signup-bar">
          <div className="sign-content">
            <h1>Create Account</h1>
            <div className="social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <p>or use email for registration</p>
            <div className="inputs">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
              />
              <input
                type="email"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
              <input
                type="repassword"
                value={repassword}
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
                placeholder="Confirm Password"
              />
            </div>
            <button onClick={Signup}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
