import axios from "axios";

export const todoClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*", // CORS
  },
});

// todoClient.interceptors.request.use((config) => {
//   console.log("config :>> ", config);
// });

// todoClient.interceptors.response.use((response) => {
//   console.log("response :>> ", response);
// });
