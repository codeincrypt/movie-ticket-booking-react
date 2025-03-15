const API_BASE_URL = import.meta.env.API_BASE_URL

export const authenticateAdmin = async (data) => {
  const response = await fetch(`${API_BASE_URL}admin/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  const result = await response.json();
  return result;
};
