import { useState, useEffect, Fragment } from "react";
import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import MovieList from "components/MovieList";
import Loader from "components/Loader";
import api from "js/moviesAPI";
import Pagination from "components/Pagination/Pagination";
// import s from "./MovieSearch.module.css";

function MovieSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
  }, [responseTotalPages]);

  if (isLoading) return <Loader />;
  return (
    <Fragment>
      <MovieList movies={data.results} pathname={pathname} />
      {query && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </Fragment>
  );
}

export default MovieSearch;
