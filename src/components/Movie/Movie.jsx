import { useQuery } from "react-query";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Section from "components/Section";
import Container from "components/Container";
// import Loader from "components/Loader";
import Button from "components/Button";
import * as movieAPI from "../../js/moviesAPI";
import s from "./Movie.module.css";

const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

function Movie() {
  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();
  const { data } = useQuery(`${movieId}`, getMovie, {
    placeholderData: {
      release_date: "1970",
      genres: [],
    },
    retry: false,
    onError: () => navigate("/"),
  });
  function getMovie() {
    return movieAPI.getMovie(movieId);
  }
  const goBack = () => {
    const prevLocation = location?.state?.pathname ?? "/";
    navigate(prevLocation);
  };
  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;
  const year = release_date.slice(0, 4);
  const posterUrl = poster_path
    ? `${IMAGE_BASE_URL}${poster_path}`
    : "/300x450.png";
  // if (isLoading) return <Loader />;
  return (
    <Section>
      <Container>
        <Button text="Go back" onClick={goBack} />
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
              <Link
                to={`/movies/${movieId}/cast`}
                state={location?.state ?? location}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={`/movies/${movieId}/reviews`}
                state={location?.state ?? location}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Outlet context={[movieId]} />
      </Container>
    </Section>
  );
}

export default Movie;
