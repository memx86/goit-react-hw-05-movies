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
import api from "js/moviesAPI";
import noImage from "images/poster-img.jpg";
import noImageRetina from "images/poster-img@2x.jpg";
import s from "./Movie.module.css";

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
    return api.getMovie(movieId);
  }
  const goBack = () => {
    const prevLocation = location?.state?.pathname ?? "/";
    const query = location?.state?.query ?? "";
    const page = location?.state?.page ?? "";
    let prevPath;
    if (page && query) {
      prevPath = `${prevLocation}?query=${query}&page=${page}`;
    } else if (page) {
      prevPath = `${prevLocation}?page=${page}`;
    } else if (query) {
      prevPath = `${prevLocation}?query=${query}`;
    } else prevPath = prevLocation;
    navigate(prevPath);
  };
  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;
  const year = release_date.slice(0, 4);
  const poster = poster_path
    ? `https://www.themoviedb.org/t/p/w300${poster_path}`
    : noImage;
  const posterRetina = poster_path
    ? `https://www.themoviedb.org/t/p/w500${poster_path}`
    : noImageRetina;
  // if (isLoading) return <Loader />;
  return (
    <Section>
      <Container>
        <Button text="Go back" onClick={goBack} />
        <div className={s.wrapper}>
          <picture>
            <source srcSet={`${poster} 1x, ${posterRetina} 2x`} />
            <img src={poster} alt={title} className={s.img} />
          </picture>
          <div className={s.content}>
            <h1>
              {title} {year && `(${year})`}
            </h1>
            <p>
              User score:{" "}
              {vote_average ? `${Math.round(vote_average * 10)}%` : "No votes"}
            </p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres.length ? (
              <ul className={s.genres}>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            ) : (
              "No genres found"
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
