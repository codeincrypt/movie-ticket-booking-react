import UserLogin from "../auth/UserLogin";
import SellerLogin from "../auth/UserLogin";

import UserProfile from "../page/user/Profile";
import MovieList from "../page/MovieList";
import MovieView from "../page/Movie";

export const AuthRouter = [
  {
    path: "/login",
    exact: true,
    component: UserLogin,
  },
  {
    path: "/seller-login",
    exact: true,
    component: SellerLogin,
  },
  {
    path: "/",
    exact: true,
    component: MovieList,
  },
  {
    path: "/movies",
    exact: true,
    component: MovieList,
  },
  {
    path: "/movies/:id",
    exact: true,
    component: MovieView,
  },
  {
    path: "/upcoming-movies",
    exact: true,
    component: MovieList,
  },
];

export const UserRouter = [
  {
    path: "/profile",
    exact: true,
    component: UserProfile,
  },
];
