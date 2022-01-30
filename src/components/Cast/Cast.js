import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import Loader from "components/Loader";
import * as movieAPI from "../../js/moviesAPI";
import s from "./Cast.module.css";
const IMG_URL = "https://www.themoviedb.org/t/p/w138_and_h175_face";

function Cast(props) {
  const [movieId] = useOutletContext();
  const { data, isLoading } = useQuery(`cast${movieId}`, getCast);
  function getCast() {
    return movieAPI.getCast(movieId);
  }
  if (isLoading) return <Loader />;
  if (!data.length) return <p>No information</p>;
  return (
    <ul className={s.list}>
      {data.map(({ id, name, profile_path, character }) => {
        const profileUrl = profile_path
          ? `${IMG_URL}${profile_path}`
          : "/138x175.png";
        return (
          <li key={id} className={s.item}>
            <img src={profileUrl} alt="name" className={s.img} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Cast;
