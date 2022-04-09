class MoviesApi {
  static #BASE_URL = "https://api.themoviedb.org/3/";
  static #KEY = "fadfbb72581e18342bb7490adda20bdd";
  static #PARAMS = new URLSearchParams({
    api_key: MoviesApi.#KEY,
    language: "en-US",
  });
  static ENDPOINTS = {
    SEARCH: "search/movie",
    MOVIE: "movie/",
    TRENDING: "trending/all/day",
  };
  #query;
  #page;

  constructor() {
    this.#page = 1;
  }

  #fetchUrl(url) {
    return fetch(`${MoviesApi.#BASE_URL}${url}${MoviesApi.#PARAMS}`).then((r) =>
      r.ok ? r.json() : Promise.reject(r)
    );
  }
  getMovies() {
    const params = new URLSearchParams({
      query: this.#query,
      page: this.#page,
    });
    const url = `${MoviesApi.ENDPOINTS.SEARCH}?${params}&`;
    return this.#fetchUrl(url).then((r) => r.results);
  }
  getMovie(id) {
    const url = `${MoviesApi.ENDPOINTS.MOVIE}${id}?`;
    return this.#fetchUrl(url);
  }
  getCast(id) {
    const url = `${MoviesApi.ENDPOINTS.MOVIE}${id}/credits?`;
    return this.#fetchUrl(url).then((r) => r.cast);
  }
  getReviews(id) {
    const url = `${MoviesApi.ENDPOINTS.MOVIE}${id}/reviews?`;
    return this.#fetchUrl(url).then((r) => r.results);
  }
  getTrending = () => {
    const url = `${MoviesApi.ENDPOINTS.TRENDING}?page=${this.#page}&`;
    return this.#fetchUrl(url);
  };
  get query() {
    return this.#query;
  }
  set query(newQuery) {
    this.#query = newQuery;
  }
  get page() {
    return this.#page;
  }
  set page(newPage) {
    this.#page = newPage > 0 ? newPage : 1;
  }
}

const api = new MoviesApi();
export default api;
