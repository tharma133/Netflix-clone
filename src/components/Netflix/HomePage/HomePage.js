import React from "react";
import "../../../style/netflix/row.css";
import Row from "./Row";
import requests from "../../../helper/request";
import Navbar from "./Navbar";
import Banner from "./Banner";

import Footer from "../../Home/Footer";
function HomePage() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
        <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
      </div>
      <div className="hr"></div>
      <Footer />
    </>
  );
}

export default HomePage;
