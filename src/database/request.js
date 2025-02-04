import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";

export const loginUser = async (id, name, email, given_name, family_name, picture) => {
  try {
    const userCollection = collection(db, "users");
    // Check if the user exists
    const userQuery = query(userCollection, where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();

      return {
        uuid: userData.uuid,
        id: userData.id,
        name: userData.name,
        email: userData.email,
        given_name: userData.given_name,
        family_name: userData.family_name,
        picture: userData.picture,
        message: "User fetched from database",
      };
    } else {
      const uuid = uuidv4()
      await addDoc(userCollection, {
        uuid, id, name, email, given_name, family_name, picture,
        createdAt: new Date(),
      });

      return {
        uuid, id, name, email, given_name, family_name, picture,
        message: "New user registered successfully",
      };
    }
  } catch (error) {
    console.error("Error in Adding or Fetching User", error);
    throw error;
  }
};

