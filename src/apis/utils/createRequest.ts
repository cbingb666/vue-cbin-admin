import axios from "axios";

export const baseRequest = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 10000,
});

