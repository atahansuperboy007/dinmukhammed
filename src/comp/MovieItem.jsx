import { Link } from "react-router-dom";

function MovieItem(props) {
  const link = "https://image.tmdb.org/t/p/w500";

  return (
    <Link to={"/movie/" + props.data.id}>
      <div className="movie-item">
        <div className="movie-item-inner">
        <img src={link + props.data.poster_path} alt="" />
        <h1>{props.data.title}</h1>
        </div>

      </div>
    </Link>
  );
}

export default MovieItem;
