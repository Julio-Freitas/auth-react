import axios, {
  AxiosDefaults,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";

export const API = axios.create({
  baseURL: "https://reqres.in/api",
});

const onRequestUser = ({
  headers,
  ...config
}: AxiosRequestConfig): AxiosRequestConfig => {
  const user = getUserLocalStorage();

  if (headers?.Authorization) {
    headers.Authorization = user?.token;
  }

  return config;
};

API.interceptors.request.use(onRequestUser, Promise.reject);
