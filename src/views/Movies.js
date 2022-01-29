// import PropTypes from "prop-types";
import Section from "components/Section";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import MovieList from "components/MovieList";

function Movies(props) {
  return (
    <Section>
      <Container>
        <SearchForm />
        <MovieList />
      </Container>
    </Section>
  );
}

// Movies.propTypes = {};

export default Movies;
