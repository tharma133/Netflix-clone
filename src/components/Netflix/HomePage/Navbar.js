import React, { useEffect, useState } from "react";
import logo from "../../../logo.svg";
import "../../../style/netflix/navbar.css";
import { FirebaseContext } from "../../../context/context";
import { auth } from "../../../firebase/firebase.prod";
import { useHistory } from "react-router-dom";

function Navbar() {
  const { currentUser } = React.useContext(FirebaseContext);
  const history = useHistory();
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const logout = () => {
    if (currentUser) {
      auth.signOut();
      history.push("/");
    }
  };

  return (
    <div className="fixed">
      <div className={`nav ${show && "nav-show"}`}>
        <img src={logo} alt="Netflix-logo" className="netflix-home-logo" />
        <button className="signin-btn position" onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
