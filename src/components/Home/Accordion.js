import React, { useState } from "react";
import "../../style/home/accordion.css";
import accordiondata from "../../json/accordiondata.json";
import { useHistory } from "react-router-dom";
import SingleQuestion from "./SingleQuestion";
import { HiOutlineChevronRight } from "react-icons/hi";
function Accordion() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState(false);

  return (
    <main>
      <div className="accordion">
        <h3>Frequently Asked Questions</h3>
        <section className="accordion-info">
          {accordiondata.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
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
      <div className="hr"></div>
    </main>
  );
}

export default Accordion;
