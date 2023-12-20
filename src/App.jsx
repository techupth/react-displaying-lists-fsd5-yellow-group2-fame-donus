import "./App.css";
import movies from "./data/movies"

function App() {
  return (
    <div className="App">
      <section className="movie-list-section"><h1>Movie List Section</h1> {
          movies.map((movieCard,index) => {
           return <div key={index}> 
              <div className="movie-card">
                <div><img src={movieCard.image}/></div>
                <div className="movie-detail">
                  <p>Title: {movieCard.title}</p>
                  <p>Year: {movieCard.year}</p>
                  <p>Runtime: {movieCard.runtime}</p>
                  <p>Genres: {movieCard.genres.map ((type) => {
                      return <span>{type}</span>
                    })
                  }
                  </p>
                  <p>IMDB Rating: {movieCard.imdbRating}</p>
                  <p>IMDB Votes: {movieCard.imdbVotes}</p>
                </div>
              </div>
            </div> 
          })
        }
      </section>
    </div>
  );
}

export default App;
