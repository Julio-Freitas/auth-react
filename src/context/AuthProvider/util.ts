import { API } from "../../services/api";
import { ILogin, IUser } from "./types";

export async function loginRequest({ email, password }: ILogin) {
  try {
    const request = await API.post("login", { email, password });
    return request.data;
  } catch (error) {
    return null;
  }
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage?.getItem("u") ?? null;

  if (!json) return null;
  const user = JSON.parse(json) ?? null;
  return user;
}

