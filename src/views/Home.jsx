import PropTypes from "prop-types";
import Section from "components/Section";
import Container from "components/Container";
import Trending from "components/Trending";

function Home({ page, totalPages, setPage, setTotalPages }) {
  return (
    <Section>
      <Container>
        <Trending
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
        />
      </Container>
    </Section>
  );
}
Home.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};

export default Home;
