import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "components/Loader";
import Cast from "components/Cast";
import Reviews from "components/Reviews";
import * as movieAPI from "../../js/moviesAPI";

function Info({ type }) {
  const [movieId] = useOutletContext();
  const { data, isLoading } = useQuery(`${type}${movieId}`, getInfo);
  function getInfo() {
    if (type === "cast") return movieAPI.getCast(movieId);
    if (type === "reviews") return movieAPI.getReviews(movieId);
  }
  if (isLoading) return <Loader />;
  if (!data.length) return <p>No reviews</p>;
  if (type === "cast") return <Cast data={data} />;
  if (type === "reviews") return <Reviews data={data} />;
}

Info.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Info;
