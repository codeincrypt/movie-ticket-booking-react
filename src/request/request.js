export const getUserInfo = async (user) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
    {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  return data
}