import PropTypes from "prop-types";
import Section from "components/Section";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import MovieSearch from "components/MovieSearch";

function Movies({ page, totalPages, setPage, setTotalPages }) {
  return (
    <Section>
      <Container>
        <SearchForm />
        <MovieSearch
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
        />
      </Container>
    </Section>
  );
}
Movies.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};
export default Movies;
