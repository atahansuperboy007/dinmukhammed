import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieItem from "./MovieItem";

function Search() {
  const { q } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=" + q +"&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [q]);

  return (
    <div className="movie-list">
      {movies.map((dinmukhammmed) => (
        <MovieItem data={dinmukhammmed} />
      ))}
    </div>
  );
}

export default Search;
