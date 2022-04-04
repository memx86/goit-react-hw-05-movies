import { useQuery } from "react-query";
import Section from "components/Section";
import Container from "components/Container";
import Loader from "components/Loader";
import * as movieAPI from "../js/moviesAPI";
import MovieList from "components/MovieList";

function Home() {
  const { data, isLoading } = useQuery("trending", movieAPI.getTrending);

  if (isLoading) return <Loader />;
  return (
    <Section>
      <Container>
        <h1>Trending today</h1>
        <MovieList movies={data} pathname="/movies" />
      </Container>
    </Section>
  );
}

export default Home;
