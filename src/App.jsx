import { Fragment, lazy, Suspense, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "components/Navbar";
import { Route, Routes } from "react-router-dom";
import Loader from "components/Loader";

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
const Movie = lazy(() =>
  import(
    /* webpackChunkName: "Movie" */
    /* webpackPrefetch: true */
    "./components/Movie"
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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  page={page}
                  setPage={setPage}
                  totalPages={totalPages}
                  setTotalPages={setTotalPages}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  page={page}
                  setPage={setPage}
                  totalPages={totalPages}
                  setTotalPages={setTotalPages}
                />
              }
            />
            <Route path="/movies/:movieId" element={<Movie />}>
              <Route index element={<div></div>} />
              <Route path="cast" element={<Info type="cast" />} />
              <Route path="reviews" element={<Info type="reviews" />} />
            </Route>
            <Route
              path="*"
              element={
                <Home
                  page={page}
                  setPage={setPage}
                  totalPages={totalPages}
                  setTotalPages={setTotalPages}
                />
              }
            />
          </Routes>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  );
}
export default App;
