import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loader from "components/Loader";
import * as movieAPI from "../../js/moviesAPI";
import s from "./Cast.module.css";
const IMG_URL = "https://www.themoviedb.org/t/p/w138_and_h175_face";

function Cast(props) {
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [movieId] = useOutletContext();

  useEffect(() => {
    setLoader(true);
    movieAPI
      .getCredits(movieId)
      .then((r) => {
        setCast(r.cast);
      })
      .finally(() => setLoader(false));
  }, [movieId]);
  if (loader) return <Loader />;
  if (!cast.length) return <p>No information</p>;
  return (
    <ul className={s.list}>
      {cast.map(({ id, name, profile_path, character }) => {
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
