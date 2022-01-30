// import PropTypes from "prop-types";
import Section from "components/Section";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import MovieSearch from "components/MovieSearch";

function Movies(props) {
  return (
    <Section>
      <Container>
        <SearchForm />
        <MovieSearch />
      </Container>
    </Section>
  );
}

// Movies.propTypes = {};

export default Movies;
