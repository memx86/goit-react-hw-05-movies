import { Link, useLocation, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MovieCard.module.css";

function MovieCard({ movie, pathname }) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { id, title, name, poster_path, release_date, first_air_date } = movie;
  const year = new Date(release_date || first_air_date).getFullYear() || "";
  return (
    <li className={s.item}>
      <Link
        to={`${pathname}/${id}`}
        state={{ ...location, query }}
        className={s.link}
      >
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title ?? name}
        />
        <p className={s.text}>
          {title ?? name}, {year}
        </p>
      </Link>
    </li>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default MovieCard;
