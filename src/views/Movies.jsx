import PropTypes from "prop-types";
import Section from "components/Section";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import MovieSearch from "components/MovieSearch";

function Movies({ totalPages, setTotalPages }) {
  return (
    <Section>
      <Container>
        <SearchForm />
        <MovieSearch totalPages={totalPages} setTotalPages={setTotalPages} />
      </Container>
    </Section>
  );
}
Movies.propTypes = {
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};
export default Movies;
