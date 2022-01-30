import { useEffect, useState } from "react";
import Section from "components/Section";
import Container from "components/Container";
import Loader from "components/Loader";
import * as movieAPI from "../js/moviesAPI";
import MovieList from "components/MovieList";

function Home(props) {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    movieAPI
      .getTrending()
      .then(onSuccess)
      .finally(() => setLoader(false));
  }, []);
  function onSuccess(response) {
    const movies = response.results;
    setMovies(movies);
  }
  if (loader) return <Loader />;
  return (
    <Section>
      <Container>
        <h1>Trending today</h1>
        <MovieList movies={movies} pathname="/movies" />
      </Container>
    </Section>
  );
}

export default Home;
