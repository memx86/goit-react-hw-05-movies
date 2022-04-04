import Section from "components/Section";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import MovieSearch from "components/MovieSearch";

function Movies() {
  return (
    <Section>
      <Container>
        <SearchForm />
        <MovieSearch />
      </Container>
    </Section>
  );
}

export default Movies;
