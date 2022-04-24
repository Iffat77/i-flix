import React from "react";
import "./Banner.css";
import "./Modal.jsx";

export default function Banner({ movie, setCurrentMovie, setShowModal }) {
  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
      className="banner"
    >
      <img src={movie.image} alt={movie.title} />
    </div>
  );
}
