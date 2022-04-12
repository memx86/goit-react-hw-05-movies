import PropTypes from "prop-types";
import Section from "components/Section";
import Container from "components/Container";
import Trending from "components/Trending";

function Home({ totalPages, setTotalPages }) {
  return (
    <Section>
      <Container>
        <Trending totalPages={totalPages} setTotalPages={setTotalPages} />
      </Container>
    </Section>
  );
}
Home.propTypes = {
  totalPages: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};

export default Home;
