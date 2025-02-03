import Home from "../page/Home";
import UserLogin from "../auth/UserLogin";
import SellerLogin from "../auth/UserLogin";

import UserProfile from "../page/user/Profile";
import MovieList from "../page/MovieList";

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
];

export const UserRouter = [
  {
    path: "/profile",
    exact: true,
    component: UserProfile,
  },
];
