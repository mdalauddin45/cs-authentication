import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form">
        <input type="text" placeholder="Your Email" />
        <input type="password" placeholder="password" />
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
