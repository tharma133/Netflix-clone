import React from "react";
import "../../../style/netflix/description.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Description({ details }) {
  return (
    <div className="movie-content">
      <img
        src={`${base_url}${details.poster_path}`}
        alt={details.name}
        className="row-posterLarge"
      />
      <div className="movie-info">
        <h3>
          <span className="title">Movie Title : </span>
          {details.title || details.original_name}
        </h3>
        <h3>
          <span className="title">Movie Overview : </span>
          {details.overview}
        </h3>
        <h3>
          {details.vote_average ? (
            <span className="title">rating : {details.vote_average} </span>
          ) : (
            ""
          )}
        </h3>
        <h3>
          {details.first_air_date ? (
            <span className="title">
              Release Date : {details.first_air_date}{" "}
            </span>
          ) : (
            ""
          )}
        </h3>
      </div>
    </div>
  );
}

export default Description;
