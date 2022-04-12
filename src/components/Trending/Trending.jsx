import { Fragment, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import PropTypes from "prop-types";
import Loader from "components/Loader";
import MovieList from "components/MovieList";
import Pagination from "components/Pagination/Pagination";
import api from "js/moviesAPI";
import s from "./Trending.module.css";

function Trending({ totalPages, setTotalPages }) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? searchParams.get("page") : 1;
  const { data, isLoading } = useQuery(["trending", page], getTrending);
  function getTrending() {
    api.page = page;
    return api.getTrending();
  }

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
      <Pagination totalPages={totalPages} />
    </Fragment>
  );
}

Trending.propTypes = {
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};

export default Trending;
