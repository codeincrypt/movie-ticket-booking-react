import config from "../../config/config";
import { getHeaders } from "./../Constant";
export const getUserInfo = async (user) => {
  const headers = getHeaders(user.access_token)
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    headers: headers,
  }
  );
  const data = await response.json();
  return data
}

export const userLoginWithGoogle = async (payload) => {
  const headers = getHeaders()
  const API_URL = `${config.BASE_URL}user/google-login`
  const response = await fetch(API_URL,
    {
      headers: headers,
      method: "POST",
      body: JSON.stringify(payload)
    }
  );
  const data = await response.json();
  return data
}

export const sellerLoginWithGoogle = async (payload) => {
  const headers = getHeaders()
  const API_URL = `${config.BASE_URL}seller/google-login`
  const response = await fetch(API_URL,
    {
      headers: headers,
      method: "POST",
      body: JSON.stringify(payload)
    }
  );
  const data = await response.json();
  return data
}
