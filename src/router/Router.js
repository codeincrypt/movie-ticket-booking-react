import UserLogin from "../auth/UserLogin";
import SellerLogin from "../auth/SellerLogin";

import UserProfile from "../page/user/Profile";
import MovieList from "../page/MovieList";
import MovieView from "../page/Movie";

import AdminDashboard from "../admin/page/Dashboard";

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
    path: "/admin-login",
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

export const AdminRouter = [
  {
    path: "/admin",
    exact: true,
    component: AdminDashboard,
  },
  {
    path: "/dashboard",
    exact: true,
    component: AdminDashboard,
  },
];
