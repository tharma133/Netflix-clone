import React, { useState, useContext } from "react";
import "../../style/signin/signin.css";
import logo from "../../logo.svg";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../context/context";
import { Link } from "react-router-dom";

function Signin() {
  document.title = "Sign-in";
  const {
    firebase,
    signinEmail,
    signinpassword,
    setSigninEmail,
    setSigninPassword,
  } = useContext(FirebaseContext);
  const history = useHistory();
  const [emailText, setEmailText] = useState(false);
  const [passwordText, setPasswordText] = useState(false);
  const [isMember, setIsmember] = useState(false);
  const [error, setError] = useState("");
  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(signinEmail, signinpassword)
      .then(() => {
        history.push("/profile");
      })
      .catch((err) => {
        if (signinEmail === "" || !pattern.test(signinEmail)) {
          setEmailText(true);
          setPasswordText(false);
          setIsmember(false);
        } else if (signinpassword === "") {
          setPasswordText(true);
          setEmailText(false);
          setIsmember(false);
        } else {
          setEmailText(false);
          setPasswordText(false);
          setIsmember(true);
        }

        setError(err.message);
      });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    setSigninEmail("");
    setSigninPassword("");
    history.push("/signup");
  };
  return (
    <div className="signin">
      <div className="signin-head">
        <div className="header-head">
          <img src={logo} alt="Netflix" className="netflix-logo" />
          <Link to="/">
            <button className="signin-btn">Back to Home</button>
          </Link>
        </div>
        <form className="signin-form">
          <div className="signin-content">
            <h1>Sign In</h1>
            {isMember && <p className="error-text">{error}</p>}
            <div className="signin-email">
              <input
                type="email"
                placeholder="Email address"
                className={`signin-email-input ${emailText && "alert"}`}
                onChange={(e) => {
                  setSigninEmail(e.target.value);
                  setEmailText(false);
                }}
              />
              {emailText && (
                <span className="signin-error">
                  Please enter a valid email address.
                </span>
              )}
            </div>

            <div className="signin-password">
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                className={`signin-password-input ${passwordText && "alert"}`}
                onChange={(e) => {
                  setSigninPassword(e.target.value);
                  setPasswordText(false);
                }}
              />
              {passwordText && (
                <span className="signin-error">
                  Your password must contain between 6 and 60 characters.
                </span>
              )}
            </div>
            <button className="signin-button" onClick={handleSubmit}>
              Sign In
            </button>

            <div className="checkin">
              <label htmlFor="check">
                <input type="checkbox" name="check" id="check" /> Remember me
              </label>
              <a href="#">Need help?</a>
            </div>
            <h4>
              New to Netflix?{" "}
              <a href="#" onClick={handleSignin}>
                Sign up now
              </a>
            </h4>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="learn">
                Learn more
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="footer">
        <div className="footer-content">
          <h2>
            Questions? Call{" "}
            <a href="tel:xxx-xxx-xxx-xxx" className="link">
              xxx-xxx-xxx-xxx
            </a>
          </h2>
          <div className="footer-list">
            <ul className="list">
              <li>
                <a href="#">FAQs</a>{" "}
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
            </ul>
            <ul className="list">
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
            <ul className="list">
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
            <ul className="list">
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
