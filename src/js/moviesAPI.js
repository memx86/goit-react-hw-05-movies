const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "fadfbb72581e18342bb7490adda20bdd";
const MOVIES = "search/movie";

function fetchUrl(url) {
  return fetch(url).then((r) => {
    if (r.ok) return r.json();
    return Promise.reject(r);
  });
}
function getMovies(query) {
  const searchQuery = `?query=${query}`;
  const url = `${BASE_URL}${MOVIES}${searchQuery}&api_key=${KEY}&language=en-US`;
  return fetchUrl(url).then((r) => r.results);
}
function getMovie(id) {
  const movie = `movie/${id}`;
  const url = `${BASE_URL}${movie}?api_key=${KEY}&language=en-US`;
  return fetchUrl(url);
}
function getCast(id) {
  const movie = `movie/${id}`;
  const url = `${BASE_URL}${movie}/credits?api_key=${KEY}&language=en-US`;
  return fetchUrl(url).then((r) => r.cast);
}
function getReviews(id) {
  const movie = `movie/${id}`;
  const url = `${BASE_URL}${movie}/reviews?api_key=${KEY}&language=en-US`;
  return fetchUrl(url).then((r) => r.results);
}
function getTrending() {
  const url = `${BASE_URL}trending/all/day?api_key=${KEY}&language=en-US`;
  return fetchUrl(url).then((r) => r.results);
}
export { fetchUrl, getMovies, getMovie, getCast, getReviews, getTrending };
