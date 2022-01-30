import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MovieList.module.css";

function MovieList({ movies, pathname }) {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, name }) => (
        <Link key={id} to={`${pathname}/${id}`}>
          {title ?? name}
        </Link>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default MovieList;
