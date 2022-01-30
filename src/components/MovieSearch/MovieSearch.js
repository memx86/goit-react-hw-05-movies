import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import MovieList from "components/MovieList";
import Loader from "components/Loader";
import * as movieAPI from "../../js/moviesAPI";
// import s from "./MovieSearch.module.css";

function MovieSearch(props) {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const { pathname } = useLocation();
  const query = searchParams.get("query");
  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    setLoader(true);
    movieAPI
      .getMovies(query)
      .then(onSuccess)
      .finally(() => setLoader(false));
  }, [query]);

  function onSuccess(response) {
    const movies = response.results;
    setMovies(movies);
  }
  if (loader) return <Loader />;
  return <MovieList movies={movies} pathname={pathname} />;
}

export default MovieSearch;
