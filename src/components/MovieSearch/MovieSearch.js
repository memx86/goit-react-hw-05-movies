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
      .then(setMovies)
      .finally(() => setLoader(false));
  }, [query]);

  if (loader) return <Loader />;
  return <MovieList movies={movies} pathname={pathname} />;
}

export default MovieSearch;

// import { useQuery } from "react-query";
// import { useLocation, useSearchParams } from "react-router-dom";
// import MovieList from "components/MovieList";
// import Loader from "components/Loader";
// import * as movieAPI from "../../js/moviesAPI";
// // import s from "./MovieSearch.module.css";

// function MovieSearch(props) {
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get("query");

//   console.log("query", query);
//   const { data, isLoading } = useQuery("movies", getMovies);
//   function getMovies() {
//     if (!query) return [];
//     console.log("fetch");
//     return movieAPI.getMovies(query);
//   }
//   const { pathname } = useLocation();

//   if (isLoading) return <Loader />;
//   return <MovieList movies={data} pathname={pathname} />;
// }

// export default MovieSearch;
