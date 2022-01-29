import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import * as movieAPI from "../../js/moviesAPI";
import s from "./MovieList.module.css";

function MovieList(props) {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const { pathname } = useLocation();
  const query = searchParams.get("query");
  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    movieAPI.getMovies(query).then(onSuccess);
  }, [query]);

  function onSuccess(response) {
    const movies = response.results;
    setMovies(movies);
  }
  return (
    <div>
      <ul className={s.list}>
        {movies.map((movie) => (
          <Link key={movie.id} to={`${pathname}/${movie.id}`}>
            {movie.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
