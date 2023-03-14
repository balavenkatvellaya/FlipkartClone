import React, { useState } from "react";
import "../styles/Login.css";
import { RxCross2 } from "react-icons/rx";
import { users } from "../UserData.js";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../redux/action";

const Login = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const [loginType, setLoginType] = useState(true);

  const showToastMessage = (category, message) => {
    switch (category) {
      case "success": {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      }

      case "error": {
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      }

      default:
        return "Please Login";
    }
  };

  const submitform = () => {
    const ispresent = users.filter((val) => val.email === email);

    if (ispresent.length > 0) {
      const pswdpresent = ispresent[0].password === parseInt(password);
      if (pswdpresent) {
        showToastMessage("success", "Logged In Successfully");
        localStorage.setItem("loggedInUser", JSON.stringify(ispresent[0]));
        setIsOpen(false);
        dispatch(login(ispresent[0]));
      } else {
        showToastMessage("error", "please check your password");
      }
    } else {
      showToastMessage("error", "check credientials");
    }
  };

  return isOpen ? (
    <div className="overlay">
      <div className="loginModel">
        <div className="left">
          <div className="left-container">
            <p className="login-title">Login</p>
            <p className="login-desc">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="login-input"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="terms">
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "blue" }}>Terms of Use</span>and
            <span style={{ color: "blue" }}>Privacy Policy</span>{" "}
          </p>
          {loginType ? (
            <button className="login-btn" onClick={submitform}>
              Login
            </button>
          ) : (
            <button className="login-btn">SignUp</button>
          )}
          {loginType ? (
            <p className="login-signUp" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="login-signUp" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <RxCross2></RxCross2>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Login;
