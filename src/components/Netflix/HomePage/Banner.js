import React, { useState, useEffect } from "react";
import "../../../style/netflix/banner.css";
import axios from "../../../helper/axios";
import requests from "../../../helper/request";
import { MdPlayArrow, MdAdd } from "react-icons/md";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  function sliceStr(str) {
    if (str) {
      return str.slice(0, 4);
    }
    return;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="movie-rating">
          <h3>
            {movie.vote_average ? (
              <span className="rating">{movie.vote_average} ratings</span>
            ) : (
              ""
            )}
          </h3>
          <h3>
            {movie.first_air_date ? (
              <span className="year">{sliceStr(movie.first_air_date)}</span>
            ) : (
              ""
            )}
          </h3>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
        <div className="banner-btns">
          <button className="banner-btn play">
            <span className="icon-btn">
              <MdPlayArrow />
            </span>{" "}
            Play
          </button>
          <button className="banner-btn add">
            <span className="icon-btn">
              <MdAdd />
            </span>{" "}
            My List
          </button>
        </div>
      </div>
      <div className="banner-fade"></div>
    </header>
  );
}

export default Banner;
