import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError({ ...error, email: "Provide a valid email" });
      setUserInfo({ ...userInfo, email: e.target.value });
    } else {
      setError({ ...error, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setError({ ...error, password: "must be at last 6 character" });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else {
      setError({ ...error, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };
  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={userInfo.email}
          onChange={handleEmailChange}
        />
        {error.email && <span className="error-message">{error.email} </span>}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={handlePasswordChange}
        />
        {error.password && (
          <span className="error-message">{error.password} </span>
        )}
        <button>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button>Google</button>
    </div>
  );
};

export default Login;
