import { Fragment } from "react";
import Navbar from "components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "views/Home";
import Movies from "views/Movies";
import MovieCard from "components/MovieCard";
import Cast from "components/Cast";
import Reviews from "components/Reviews";
import NotFound from "views/NotFound";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieCard />}>
          <Route index element={<div></div>} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}
export default App;
