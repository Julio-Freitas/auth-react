import { API } from "../../services/api";
import { IList } from "./type";

export const listRequest = async (page?: number | string) => {
  try {
    const { data } = await API.get<IList>(`/users?page=${page || 1}`);
    return data;
  } catch (error) {
    return error;
  }
};
