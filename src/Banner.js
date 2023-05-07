import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  
  return (
    <header
      className="banner"
      style={{
        // backgroundSize: "contain",
        // position: "absolute",
        backgroundImage: `url(
          https://image.tmdb.org/t/p/original${movie?.backdrop_path}
        )`, 
        
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <video width={'640px'} height={'480px'} src={movie.trailers} autoPlay controls>
        <source src={movie.trailer}></source>
      </video> */}
      <div className="banner_container">
        {/* title */}
        
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="btn btn-play">Play</button>
          <button className="btn btn-list">My List</button>
        </div>
        {/* description */}
        <h3 className="banner_description">{movie?.overview}</h3>
      </div>
      <div className="fadder" />
    </header>
  );
}

export default Banner;
