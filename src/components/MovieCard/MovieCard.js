import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Container from "components/Container";
import Section from "components/Section";
import Button from "components/Button";
import * as movieAPI from "../../js/moviesAPI";
import s from "./MovieCard.module.css";

const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

function MovieCard(props) {
  const [movie, setMovie] = useState(() => ({
    release_date: "1970",
    genres: [],
  }));
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    movieAPI.getMovie(movieId).then(setMovie);
  }, [movieId]);
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const year = release_date.slice(0, 4);
  const posterUrl = poster_path
    ? `${IMAGE_BASE_URL}${poster_path}`
    : "/300x450.png";
  return (
    <Section>
      <Container>
        <Button text="Go back" onClick={() => navigate(-1)} />
        <div className={s.wrapper}>
          <img src={posterUrl} alt={title} className={s.img} />
          <div className={s.content}>
            <h1>
              {title} ({year})
            </h1>
            <p>User score: {Math.round(vote_average * 10)}%</p>
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
