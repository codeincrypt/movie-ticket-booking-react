import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const AdminLoginUser = async (email, password) => {
  try {
    const userCollection = collection(db, "admin");
    // Check if the user exists
    const userQuery = query(userCollection, where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();

      return {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        picture: userData.picture,
        status: 1,
        message: "User fetched from database",
      };
    } else {
      return {
        status: 0,
        message: "Invalid username or password",
      };
    }
  } catch (error) {
    console.error("Error in Adding or Fetching User", error);
    throw error;
  }
};


export const getMovies = async (movieType) => {
  const collections = collection(db, "movielist");
  const userQuery = query(collections, where("movie_type", "==", movieType));
  const querySnapshot = await getDocs(userQuery);
  try {
    const response = querySnapshot.docs[0].data();
    return {
      response
    };
  } catch (error) {
    console.error("Error in getting movies", error);
    throw error;
  }
}
