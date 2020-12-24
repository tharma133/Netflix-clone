import React from "react";
import "../../style/home/header.css";
import Header from "./Header";
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import Accordion from "./Accordion";

function Home() {
  return (
    <div className="home">
      <Header />
      <Suggestion />
      <Accordion />
      <Footer />
    </div>
  );
}
export default Home;
