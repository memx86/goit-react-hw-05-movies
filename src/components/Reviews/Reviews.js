import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import Loader from "components/Loader";
import * as movieAPI from "../../js/moviesAPI";
import s from "./Reviews.module.css";

function Reviews(props) {
  const [movieId] = useOutletContext();
  const { data, isLoading } = useQuery(`cast${movieId}`, getReviews);
  function getReviews() {
    return movieAPI.getReviews(movieId);
  }
  if (isLoading) return <Loader />;
  if (!data.length) return <p>No reviews</p>;
  return (
    <ul className={s.list}>
      {data.map(({ id, author, content }) => (
        <li key={id}>
          <p className={s.author}>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
