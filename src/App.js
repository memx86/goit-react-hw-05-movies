import { Fragment, lazy, Suspense } from "react";
import Navbar from "components/Navbar";
import { Route, Routes } from "react-router-dom";
import Loader from "components/Loader";
// import Home from "views/Home";
// import Movies from "views/Movies";
// import MovieCard from "components/MovieCard";
// import Cast from "components/Cast";
// import Reviews from "components/Reviews";

const Home = lazy(() => import("./views/Home" /*webpackChunkName: "Home"*/));
const Movies = lazy(() =>
  import("./views/Movies" /*webpackChunkName: "Movies"*/)
);
const MovieCard = lazy(() =>
  import("./components/MovieCard" /*webpackChunkName: "MovieCard"*/)
);
const Cast = lazy(() =>
  import("./components/Cast" /*webpackChunkName: "Cast"*/)
);
const Reviews = lazy(() =>
  import("./components/Reviews" /*webpackChunkName: "Reviews"*/)
);
function App() {
  return (
    <Fragment>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieCard />}>
            <Route index element={<div></div>} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}
export default App;
