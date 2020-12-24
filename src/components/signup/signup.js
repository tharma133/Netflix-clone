import React, { useState } from "react";
import "../../style/signin/signin.css";
import logo from "../../logo.svg";
import { useHistory, Link } from "react-router-dom";
import { FirebaseContext } from "../../context/context";

function Signup() {
  document.title = "Sign-up";
  const {
    firebase,
    signinEmail,
    signinUsername,
    signinpassword,
    setSigninEmail,
    setSigninPassword,
    setSigninUsername,
  } = React.useContext(FirebaseContext);
  const history = useHistory();
  const [emailText, setEmailText] = useState(false);
  const [passwordText, setPasswordText] = useState(false);
  const [usernameText, setUsernameText] = useState(false);
  const [isMember, setIsmember] = useState(false);
  const [error, setError] = useState("");
  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(signinEmail, signinpassword)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: signinUsername,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push("/profile");
          });
      })
      .catch((err) => {
        if (signinEmail === "" || !pattern.test(signinEmail)) {
          console.log(signinEmail);
          setEmailText(true);
          setPasswordText(false);
          setUsernameText(false);
          setIsmember(false);
        } else if (signinUsername === "") {
          setUsernameText(true);
          setEmailText(false);
          setPasswordText(false);
          setIsmember(false);
        } else if (signinpassword === "") {
          setPasswordText(true);
          setEmailText(false);
          setUsernameText(false);
          setIsmember(false);
        } else {
          setEmailText(false);
          setPasswordText(false);
          setUsernameText(false);
          setIsmember(true);
        }

        setError(err.message);
      });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    history.push("/signin");
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
            <h1>Sign Up</h1>
            {isMember && <p className="error-text">{error}</p>}
            <div className="signin-email">
              <input
                type="email"
                placeholder="Email or phone number"
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

            <div className="signin-email">
              <input
                type="username"
                placeholder="Username"
                className={`signin-username-input ${usernameText && "alert"}`}
                onChange={(e) => {
                  setSigninUsername(e.target.value);
                  setUsernameText(false);
                }}
              />
              {usernameText && (
                <span className="signin-error">Please enter a Username.</span>
              )}
            </div>

            <div className="signin-password">
              <input
                type="password"
                placeholder="Password"
                className={`signin-password-input ${passwordText && "alert"}`}
                onChange={(e) => {
                  setSigninPassword(e.target.value);
                  setPasswordText(false);
                }}
              />
              {passwordText && (
                <span className="signin-error">
                  Your password must contain between 6 to 60 characters.
                </span>
              )}
            </div>
            <button className="signin-button" onClick={handleSubmit}>
              Sign Up
            </button>
            <div className="checkin">
              <label htmlFor="check">
                <input type="checkbox" name="check" id="check" /> Remember me
              </label>
              <a href="#">Need help?</a>
            </div>
            <h4>
              Already a User?{" "}
              <a href="#" onClick={handleSignin}>
                Sign In now
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
            <a href="tel:xxx-xxx-xxx-xxxx" className="link">
              xxx-xxx-xxx-xxxx
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

export default Signup;
