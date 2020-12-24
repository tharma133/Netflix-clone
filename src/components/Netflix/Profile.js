import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "../../style/netflix/profile.css";
import { useHistory } from "react-router-dom";

function Profile({ user }) {
  document.title = "Profile";
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [user.displayName]);

  const netflixPage = () => {
    history.push("/netflix");
  };

  return (
    <div className="profile">
      <div className="profile-head">
        <img className="netflix-profile-logo" src={logo} alt="Netflix" />
      </div>
      <div className="profiles">
        <div className="profile-title">Who's watching</div>

        <div className="profile-user">
          <img
            src={
              loading
                ? "/images/misc/loading.gif"
                : `/images/users/${user.photoURL}.png`
            }
            alt=""
            className="picture"
            onClick={netflixPage}
          />
          <h2 className="profile-name" onClick={netflixPage}>
            {user.displayName}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
