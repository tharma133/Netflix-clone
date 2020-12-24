import React, { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";

function SingleQuestion({ header, body }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="accordion-question">
      <header>
        <h4>{header}</h4>
        <button
          className="accordion-icon"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <IoMdClose /> : <IoMdAdd />}
        </button>
      </header>
      {showInfo && <p className="accordion-text"> {body}</p>}
    </article>
  );
}

export default SingleQuestion;
