import { Link, useLocation, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import noImage from "images/poster-img.jpg";
import noImageRetina from "images/poster-img@2x.jpg";
import s from "./MovieCard.module.css";

function MovieCard({ movie, pathname }) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { id, title, name, poster_path, release_date, first_air_date } = movie;
  const year = new Date(release_date || first_air_date).getFullYear() || "";
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : noImage;
  const posterRetina = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : noImageRetina;
  return (
    <li className={s.item}>
      <Link
        to={`${pathname}/${id}`}
        state={{ ...location, query }}
        className={s.link}
      >
        <picture>
          <source srcSet={`${poster} 1x, ${posterRetina} 2x`} />
          <img className={s.img} src={poster} alt={title ?? name} />
        </picture>
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
