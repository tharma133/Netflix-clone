import React from "react";
import "../../style/home/footer.css";

function Footer() {
  return (
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
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
          </ul>
          <ul className="list">
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
          <ul className="list">
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Ways to Watch</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Netflix Originals</a>
            </li>
          </ul>
          <ul className="list">
            <li>
              <a href="#">Media Centre</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <h3 style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
          Netflix India
        </h3>
      </div>
    </div>
  );
}

export default Footer;
