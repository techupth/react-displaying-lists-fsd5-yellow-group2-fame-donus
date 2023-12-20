import React from "react";
import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {movies.map((movie, index) => (
          <div className="movie-box" key={index}>
            <div>
              <img src={movie.image} alt={movie.title} className="movie-img" />
            </div>
            <div>
              <div>Title: {movie.title}</div>
              <div>Year: {movie.year}</div>
              <div>Runtime: {movie.runtime}</div>
              <div className="genres-parent">
                <div>Genres:</div>
                {movie.genres.map((genre, genreIndex) => (
                  <div key={genreIndex} className="geres-list">
                    {genre}
                  </div>
                ))}
              </div>
              <div>IMDB Rating: {movie.imdbRating}</div>
              <div>IMDB Votes: {movie.imdbVotes}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
