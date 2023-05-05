import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseURL = `https://image.tmdb.org/t/p/w500`;
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      console.table(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          // <div className={isLargeRow?"hmm":""}>
          <img
            className="row_poster"
            src={`${baseURL}${
              isLargeRow ?  movie.backdrop_path:movie.poster_path
            }`}
            alt={`${movie.title}`}
            key={movie.id}
            />
          
            
        ))}
      </div>
    </div>
  );
}

export default Row;
