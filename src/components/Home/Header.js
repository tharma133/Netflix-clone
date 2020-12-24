import React, { useContext, useState } from "react";
import "../../style/home/header.css";
import logo from "../../logo.svg";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../../context/context";

function Header() {
  const { setSigninEmail } = useContext(FirebaseContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [text, setText] = useState(false);

  return (
    <section className="section">
      <div className="header">
        <div className="header-head">
          <img src={logo} alt="Netflix" className="netflix-logo" />
          <Link to="/signin">
            <button className="signin-btn">Sign In</button>
          </Link>
        </div>
        <div className="header-body">
          <div className="header-text">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
          </div>
          <div className="accordion-email-content">
            <h2>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h2>
            <form
              action="https://formspree.io/f/mgeppykj"
              method="POST"
              className="email-content"
            >
              <div className="email">
                <input
                  name="_replyto"
                  type="email"
                  placeholder="Email address"
                  className="accordion-email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setText(false);
                  }}
                />
                {text && <span>Email is required.</span>}
              </div>
              <a href="#">
                <button className="start-btn">
                  get started
                  <span>
                    <HiOutlineChevronRight />
                  </span>
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="hr"></div>
    </section>
  );
}

export default Header;
