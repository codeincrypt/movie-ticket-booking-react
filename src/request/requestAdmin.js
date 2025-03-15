import { Request, GET, POST } from "./Constant";

// Get All Movies
export const getMovies = async () => {
  return await Request(GET, "admin/movies");
};

// Add Movies
export const addMovies = async (payload) => {
  return await Request(POST, "admin/add-movies", "", payload);
};

// Get Searched Movies (with dynamic query)
export const getSearchedMovies = async (query) => {
  return await Request(GET, `admin/movie?query=${query}`);
};