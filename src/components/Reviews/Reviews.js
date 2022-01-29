import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import * as movieAPI from "../../js/moviesAPI";
import s from "./Reviews.module.css";

function Reviews(props) {
  const [reviews, setReviews] = useState([]);
  const [movieId] = useOutletContext();

  useEffect(() => {
    movieAPI.getReviews(movieId).then((r) => {
      setReviews(r.results);
    });
  }, [movieId]);
  console.log("reviews", reviews);
  if (!reviews.length) return <p>No reviews</p>;
  return (
    <ul className={s.list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
