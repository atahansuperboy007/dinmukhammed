import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

function MovieInner() {
  const [films, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1s"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie-work">
      <div className="movie-list">
        {films.map((Dimash) => (
          <MovieItem data={Dimash} />
        ))}
      </div>
    </div>
  );
}

export default MovieInner;
