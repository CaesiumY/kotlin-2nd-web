import { authClient } from "./client";

export const register = async (id, password, nickname) => {
  const response = await authClient.post("/register", {
    id,
    password,
    nickname,
  });

  return response.data;
};

export const login = async (id, password) => {
  const response = await authClient.post("/login", { id, password });

  return response.data;
};

export const getUserInfo = async (token) => {
  const response = await authClient.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
