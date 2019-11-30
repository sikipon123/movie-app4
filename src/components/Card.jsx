import React from "react";
import Ratingmovie from "./Ratingmovie";

export default function Card({ movie }) {
  return (
    <div className="box-vision">
      <img className="box-img" src={movie.img} />
      <div className="division">
        <p>{movie.name}</p>
        <p>{movie.releasedate}</p>
        <Ratingmovie rate={movie.rate} />
      </div>
    </div>
  );
}
