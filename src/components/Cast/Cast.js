import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import * as movieAPI from "../../js/moviesAPI";
import s from "./Cast.module.css";
const IMG_URL = "https://www.themoviedb.org/t/p/w138_and_h175_face";

function Cast(props) {
  const [cast, setCast] = useState([]);
  const [movieId] = useOutletContext();

  useEffect(() => {
    movieAPI.getCredits(movieId).then((r) => {
      setCast(r.cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {cast.length &&
        cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`${IMG_URL}${profile_path}`}
                alt="name"
                className={s.img}
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
}

export default Cast;
