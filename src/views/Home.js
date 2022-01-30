import { useEffect, useState } from "react";
import Section from "components/Section";
import Container from "components/Container";
import * as movieAPI from "../js/moviesAPI";
import MovieList from "components/MovieList";

function Home(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    movieAPI.getTrending().then(onSuccess);
  }, []);
  function onSuccess(response) {
    const movies = response.results;
    setMovies(movies);
  }
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
