import { Request, GET, POST } from "./Constant";

// Get Movies (with dynamic movie type)
export const getMyMovies = async (movieType, token) => {
  return await Request(GET, `seller/movies/${movieType}`, token);
};

// Add Theatre
export const addNewTheatre = async (token, payload) => {
  return await Request(POST, "seller/add-theatre", token, payload);
};

// Get My Theatres
export const getMyTheatre = async (token) => {
  return await Request(GET, "seller/my-theatre", token);
};
