import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {movies.map((movie) => {
          return (
            <div className="movie-box">
              <div>
                <img src={movie.image} className="movie-img"></img>
              </div>
              <div>
                <div>Title: {movie.title}</div>
                <div>Year: {movie.year}</div>
                <div>Runtime: {movie.runtime}</div>
                <div>Genres: {movie.genres}</div>
                <div>IMDB Rating: {movie.imdbRating}</div>
                <div>IMDB Votes: {movie.imdbVotes}</div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
