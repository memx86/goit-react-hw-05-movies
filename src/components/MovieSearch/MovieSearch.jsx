import { useEffect, Fragment } from "react";
import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import MovieList from "components/MovieList";
import Loader from "components/Loader";
import api from "js/moviesAPI";
import Pagination from "components/Pagination/Pagination";
import s from "./MovieSearch.module.css";

function MovieSearch({ page, totalPages, setPage, setTotalPages }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, isLoading } = useQuery(["movies", query, page], getMovies);
  function getMovies() {
    if (!query) return [];
    api.query = query;
    api.page = page;
    return api.getMovies();
  }
  useEffect(() => {
    setPage(1);
  }, [setPage]);

  const { pathname } = useLocation();
  const responseTotalPages = data?.total_pages;
  useEffect(() => {
    if (!responseTotalPages) return;
    setTotalPages(responseTotalPages);
  }, [responseTotalPages, setTotalPages]);

  if (isLoading) return <Loader />;
  if (query && !data?.results?.length)
    return <p className={s.error}>{query} not found</p>;
  return (
    <Fragment>
      {data?.results && <MovieList movies={data.results} pathname={pathname} />}
      {query && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </Fragment>
  );
}
MovieSearch.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};

export default MovieSearch;
