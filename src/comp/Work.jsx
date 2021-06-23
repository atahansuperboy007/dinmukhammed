import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

function Work() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie-list">
      {movies.map((dinmukhammmed) => (
        <MovieItem data={dinmukhammmed} />
      ))}
    </div>

  );
}

export default Work