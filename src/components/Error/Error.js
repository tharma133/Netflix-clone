import React, { useState, useEffect, useContext } from "react";
import "../../style/error/error.css";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../context/context";

function Error() {
  const { user } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(false);
  document.title = "Error";

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  return (
    <div className="error-page">
      <img src="/images/misc/spinner.png" alt="" className="spinner" />
      {loading && (
        <Link to={user ? "/profile" : "/"}>
          <button className="error-btn">Back to Home</button>
        </Link>
      )}
    </div>
  );
}

export default Error;
