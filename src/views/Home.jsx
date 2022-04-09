import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Section from "components/Section";
import Container from "components/Container";
import Loader from "components/Loader";
import api from "js/moviesAPI";
import MovieList from "components/MovieList";
import Pagination from "components/Pagination/Pagination";

function Home() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data, isLoading } = useQuery(["trending", page], getTrending);
  function getTrending() {
    api.page = page;
    return api.getTrending();
  }
  const responseTotalPages = data?.total_pages;

  useEffect(() => {
    if (!responseTotalPages) return;
    setTotalPages(responseTotalPages);
  }, [responseTotalPages]);

  if (isLoading) return <Loader />;
  return (
    <Section>
      <Container>
        <h1 className="trending-title">Trending today</h1>
        <MovieList movies={data.results} pathname="/movies" />
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </Container>
    </Section>
  );
}

export default Home;
