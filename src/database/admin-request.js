import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const authenticateAdmin = async (values) => {
  try {
    const { username, password } = values;
  const userCollection = collection(db, "admin");

  const userQuery = query(userCollection, where("email", "==", username));
  const querySnapshot = await getDocs(userQuery);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    const isPasswordValid = password === userData.password;
    
    if (!isPasswordValid) {
      return {
        status: 0,
        message: "Invalid username or password",
      };
    }

    return {
      id: userDoc.id,
      name: userData.name,
      email: userData.email,
      picture: userData.picture,
      status: 1,
      message: "User authenticated successfully",
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
