import AdminLogin from "../auth/AdminLogin";
import SellerLogin from "../auth/SellerLogin";
import UserLogin from "../auth/UserLogin";

import MovieList from "../page/MovieList";
import MovieView from "../page/Movie";

import UserProfile from "../page/user/Profile";

import AdminDashboard from "../admin/page/Dashboard";
import AddMovies from "../admin/page/AddMovies";
import MovieLists from "../admin/page/MovieList";
import TheatreList from "../admin/page/TheatreList";

import SellerMovies from "../seller/page/SellerMovies";
import SellerBookings from "../seller/page/SellerBookings";
import SellerTheatre from "../seller/page/SellerTheatre";
import SellerDashboard from "../seller/page/Dashboard";
import Sellers from "../admin/page/Sellers";
import SellerSeatingMap from "../seller/page/SellerSeatingMap";

export const UserAuthRouter = [
  {
    path: "/login",
    exact: true,
    component: UserLogin,
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
]

export const UserRouter = [
  {
    path: "/profile",
    exact: true,
    component: UserProfile,
  },
]

export const AuthRouter = [
  {
    path: "/admin-login",
    exact: true,
    component: AdminLogin,
  },
  {
    path: "/seller-login",
    exact: true,
    component: SellerLogin,
  },
]

export const AdminRouter = [
  {
    path: "/admin",
    exact: true,
    component: AdminDashboard,
  },
  {
    path: "/admin/dashboard",
    exact: true,
    component: AdminDashboard,
  },
  {
    path: "/admin/movies",
    exact: true,
    component: MovieLists,
  },
  {
    path: "/admin/theatre",
    exact: true,
    component: TheatreList,
  },
  {
    path: "/admin/sellers",
    exact: true,
    component: Sellers,
  },
  {
    path: "/admin/add-movies",
    exact: true,
    component: AddMovies,
  },
]

export const SellerRouter = [
  {
    path: "/seller",
    exact: true,
    component: SellerDashboard,
  },
  {
    path: "/seller/dashboard",
    exact: true,
    component: SellerDashboard,
  },
  {
    path: "/seller/movies",
    exact: true,
    component: SellerMovies,
  },
  {
    path: "/seller/theatre",
    exact: true,
    component: SellerTheatre,
  },
  {
    path: "/seller/theatre/seating/:id",
    exact: true,
    component: SellerSeatingMap,
  },
  {
    path: "/seller/bookings",
    exact: true,
    component: SellerBookings,
  },
]
