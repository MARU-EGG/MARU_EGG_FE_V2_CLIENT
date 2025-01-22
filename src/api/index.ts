import axios from 'axios';

export const server_axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SPRING_SERVER_API_ADDRESS,
  timeout: 200000,
  withCredentials: true,
});

export const llm_axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_LLM_SERVER_API_ADDRESS,
  timeout: 200000,
  withCredentials: true,
});
