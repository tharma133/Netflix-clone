import React from "react";
import url from "./apiKey";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${url}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${url}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${url}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${url}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${url}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${url}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${url}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${url}&with_genres=99`,
};

export default requests;
