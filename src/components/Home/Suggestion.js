import React from "react";
import "../../style/home/suggestion.css";
import suggestiondata from "../../json/suggestiondata.json";

function Suggestion() {
  return (
    <div className="suggestion-container">
      {suggestiondata.map((item) => {
        return (
          <section key={item.id} className="section">
            <div className="suggestion">
              <div className="suggestion-content">
                <h1>{item.title}</h1>
                <h4>{item.subTitle}</h4>
              </div>
              <div className="suggestion-img">
                <img src={item.image} alt={item.alt} />
              </div>
            </div>
            <div className="hr"></div>
          </section>
        );
      })}
    </div>
  );
}

export default Suggestion;
