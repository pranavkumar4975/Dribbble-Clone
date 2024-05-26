import React, { useState } from "react";
import "./LoginSignup.css";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function Signin() {
    if (!password || !user) {
      alert("Enter Valid Details");
      return;
    }
    alert("User Signed in Successfully");
    navigate("/");
  }
  function Signup() {
    navigate("/signup");
  }
  return (
    <div className="login">
      <div className="container">
        <div className="signin">
          <div className="log-content">
            <h1>Sign in</h1>
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
            <p>or use your account</p>
            <div className="inputs">
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
            </div>
            <button onClick={Signin}>Sign in</button>
          </div>
        </div>
        <div className="signup">
          <div className="message">
            <h1>Hello, Folk!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={Signup}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
