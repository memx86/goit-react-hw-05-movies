import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loader from "components/Loader";
import * as movieAPI from "../../js/moviesAPI";
import s from "./Reviews.module.css";

function Reviews(props) {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [movieId] = useOutletContext();

  useEffect(() => {
    setLoader(true);
    movieAPI
      .getReviews(movieId)
      .then((r) => {
        setReviews(r.results);
      })
      .finally(() => setLoader(false));
  }, [movieId]);
  if (loader) return <Loader />;
  if (!reviews.length) return <p>No reviews</p>;
  return (
    <ul className={s.list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p className={s.author}>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
