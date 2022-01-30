import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import MovieList from "components/MovieList";
import * as movieAPI from "../../js/moviesAPI";
// import s from "./MovieSearch.module.css";

function MovieSearch(props) {
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
  return <MovieList movies={movies} pathname={pathname} />;
}

export default MovieSearch;
