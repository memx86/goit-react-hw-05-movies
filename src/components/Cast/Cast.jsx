import PropTypes from "prop-types";
import s from "./Cast.module.css";
const IMG_URL = "https://www.themoviedb.org/t/p/w138_and_h175_face";

function Cast({ data }) {
  return (
    <ul className={s.list}>
      {data.map(({ id, name, profile_path, character }) => {
        const profileUrl = profile_path
          ? `${IMG_URL}${profile_path}`
          : "/138x175.png";
        return (
          <li key={`${id}${character}`} className={s.item}>
            <img src={profileUrl} alt="name" className={s.img} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
Cast.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cast;
