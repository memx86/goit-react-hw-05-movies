import { Fragment, useEffect } from "react";
import { useQuery } from "react-query";
import PropTypes from "prop-types";
import Loader from "components/Loader";
import MovieList from "components/MovieList";
import Pagination from "components/Pagination/Pagination";
import api from "js/moviesAPI";
import s from "./Trending.module.css";

function Trending({ page, totalPages, setPage, setTotalPages }) {
  const { data, isLoading } = useQuery(["trending", page], getTrending);
  function getTrending() {
    api.page = page;
    return api.getTrending();
  }
  useEffect(() => {
    setPage(1);
  }, [setPage]);

  const responseTotalPages = data?.total_pages;
  useEffect(() => {
    if (!responseTotalPages) return;
    setTotalPages(responseTotalPages);
  }, [responseTotalPages, setTotalPages]);

  if (isLoading) return <Loader />;
  return (
    <Fragment>
      <h1 className={s.title}>Trending today</h1>
      {data?.results && <MovieList movies={data.results} pathname="/movies" />}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </Fragment>
  );
}

Trending.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};

export default Trending;
