import PropTypes from "prop-types";
import s from "./Reviews.module.css";

function Reviews({ data }) {
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
Reviews.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Reviews;
