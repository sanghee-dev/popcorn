import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3a39f0c7dccba302f170069ba8c6403c",
    language: "en-US",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("/movie/now_playing"),
  upcoming: () => api.get("/movie/upcoming"),
  popular: () => api.get("/movie/popular"),
  topRated: () => api.get("/movie/top_rated"),
  detail: (id) =>
    api.get(`/movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("/search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  video: (id) => api.get(`/movie/${id}/videos`),
  credits: (id) => api.get(`/movie/${id}/credits`),
  collection: (id) => api.get(`/collection/${id}`),
  reviews: (id) => api.get(`/movie/${id}/reviews`),
  trending: (media_type = "movie", time_window = "week") =>
    api.get(`/trending/${media_type}/${time_window}`),
};

export const tvApi = {
  airingToday: () => api.get("/tv/airing_today"),
  onTheAir: () => api.get("/tv/on_the_air"),
  popular: () => api.get("/tv/popular"),
  topRated: () => api.get("/tv/top_rated"),
  detail: (id) =>
    api.get(`/tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("/search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  video: (id) => api.get(`/tv/${id}/videos`),
  credits: (id) => api.get(`/tv/${id}/credits`),
  reviews: (id) => api.get(`/tv/${id}/reviews`),
  trending: (media_type = "tv", time_window = "week") =>
    api.get(`/trending/${media_type}/${time_window}`),
};
