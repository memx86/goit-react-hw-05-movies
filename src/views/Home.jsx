import { useQuery } from "react-query";
import Section from "components/Section";
import Container from "components/Container";
import Loader from "components/Loader";
import api from "js/moviesAPI";
import MovieList from "components/MovieList";

function Home() {
  const { data, isLoading } = useQuery("trending", api.getTrending);

  if (isLoading) return <Loader />;
  return (
    <Section>
      <Container>
        <h1 className="trending-title">Trending today</h1>
        <MovieList movies={data} pathname="/movies" />
      </Container>
    </Section>
  );
}

export default Home;
