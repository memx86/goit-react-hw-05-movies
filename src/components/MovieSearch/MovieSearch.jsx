import { useEffect, Fragment } from "react";
import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import MovieList from "components/MovieList";
import Loader from "components/Loader";
import api from "js/moviesAPI";
import Pagination from "components/Pagination/Pagination";
import s from "./MovieSearch.module.css";

function MovieSearch({ totalPages, setTotalPages }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page") ? searchParams.get("page") : 1;

  const { data, isLoading } = useQuery(["movies", query, page], getMovies);
  function getMovies() {
    if (!query) return [];
    api.query = query;
    api.page = page;
    return api.getMovies();
  }

  const { pathname } = useLocation();
  const responseTotalPages = data?.total_pages;
  useEffect(() => {
    if (!responseTotalPages) return;
    setTotalPages(responseTotalPages);
  }, [responseTotalPages, setTotalPages]);

  if (isLoading) return <Loader />;
  if (query && !data?.results?.length) {
    return <p className={s.error}>{query} not found</p>;
  }
  return (
    <Fragment>
      {data?.results && <MovieList movies={data.results} pathname={pathname} />}
      {query && <Pagination totalPages={totalPages} />}
    </Fragment>
  );
}
MovieSearch.propTypes = {
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};

export default MovieSearch;
