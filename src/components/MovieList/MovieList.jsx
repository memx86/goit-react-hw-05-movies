import PropTypes from "prop-types";
import MovieCard from "components/MovieCard";
import s from "./MovieList.module.css";

function MovieList({ movies = [], pathname }) {
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} pathname={pathname} />
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default MovieList;
