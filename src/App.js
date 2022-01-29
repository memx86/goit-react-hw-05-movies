import { Fragment } from "react";
import Navbar from "components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "views/Home";
import Movies from "views/Movies";
import NotFound from "views/NotFound";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}
export default App;
