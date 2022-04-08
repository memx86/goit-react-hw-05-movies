import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import MovieList from "components/MovieList";
import Loader from "components/Loader";
import * as movieAPI from "../../js/moviesAPI";
// import s from "./MovieSearch.module.css";

function MovieSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, isLoading } = useQuery(["movies", query], getMovies);
  function getMovies() {
    if (!query) return [];
    return movieAPI.getMovies(query);
  }
  const { pathname } = useLocation();

  if (isLoading) return <Loader />;
  return <MovieList movies={data} pathname={pathname} />;
}

export default MovieSearch;