import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MovieCard.module.css";

function MovieCard({ movie, pathname }) {
  const location = useLocation();
  const { id, title, name, poster_path } = movie;
  return (
    <li>
      <Link to={`${pathname}/${id}`} state={location} className={s.link}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title ?? name}
        />
        <p>{title ?? name}</p>
      </Link>
    </li>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default MovieCard;
