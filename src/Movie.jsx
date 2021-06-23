import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Movie() {
  const link = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" + id +"?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  console.log(movie)

  if (!movie) return null;

  return (
    <div className="movie">
      <img src={link + movie.poster_path} alt="" />
      <div className="movie-text">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      <h3> Рейтинг: <span>{movie.vote_average}</span></h3>
      <h5>{movie.homepage}</h5>
      </div>
    </div>
  );
}

export default Movie;
