import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Container from "components/Container";
import Section from "components/Section";
import * as movieAPI from "../../js/moviesAPI";
import s from "./MovieCard.module.css";

const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

function MovieCard(props) {
  const [movie, setMovie] = useState(() => ({
    release_date: "1970",
    genres: [],
  }));
  const { movieId } = useParams();

  useEffect(() => {
    movieAPI.getMovie(movieId).then(setMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { poster_path, title, release_date, popularity, overview, genres } =
    movie;
  const year = release_date.slice(0, 4);
  return (
    <Section>
      <Container>
        <div className={s.wrapper}>
          {poster_path && (
            <img
              src={`${IMAGE_BASE_URL}${poster_path}`}
              alt={title}
              className={s.img}
            />
          )}
          <div>
            <h1>
              {title} ({year})
            </h1>
            <p>User score: {popularity}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres.length && (
              <ul className={s.genres}>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={s.information}>
          <p>Additional information</p>
          <ul className={s.list}>
            <li>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet context={[movieId]} />
      </Container>
    </Section>
  );
}

export default MovieCard;
