import { Fragment, lazy, Suspense } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "components/Navbar";
import { Route, Routes } from "react-router-dom";
import Loader from "components/Loader";
// import Home from "views/Home";
// import Movies from "views/Movies";
// import MovieCard from "components/MovieCard";
// import Cast from "components/Cast";
// import Reviews from "components/Reviews";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

const Home = lazy(() => import("./views/Home" /*webpackChunkName: "Home"*/));
const Movies = lazy(() =>
  import(
    /* webpackChunkName: "Movies" */
    /* webpackPrefetch: true */
    "./views/Movies"
  )
);
const MovieCard = lazy(() =>
  import(
    /* webpackChunkName: "MovieCard" */
    /* webpackPrefetch: true */
    "./components/MovieCard"
  )
);
const Info = lazy(() =>
  import(
    /* webpackChunkName: "Info" */
    /* webpackPrefetch: true */
    "./components/Info"
  )
);

function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieCard />}>
              <Route index element={<div></div>} />
              <Route path="cast" element={<Info type="cast" />} />
              <Route path="reviews" element={<Info type="reviews" />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  );
}
export default App;
