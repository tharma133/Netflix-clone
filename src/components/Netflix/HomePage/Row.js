import React, { useState, useEffect } from "react";
import axios from "../../../helper/axios";
import "../../../style/netflix/row.css";
import Description from "./Description";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);
  const [issue, setIssue] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (issue) {
      setDetails([]);
      setShow(false);
      setIssue(false);
    } else {
      setDetails(movie);
      setShow(true);
      setIssue(true);
    }
  };

  return (
    <div className="row">
      <h2 className="filter-title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            />
          );
        })}
      </div>
      {show && <Description details={details} />}
    </div>
  );
}

export default Row;
