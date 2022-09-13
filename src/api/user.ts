import axios from "axios";
import { User } from "../types/user";

const BASE_URL = "https://api.github.com";

export const getList = (): Promise<{ data: User[] }> => {
  return axios.get(`${BASE_URL}/users`);
};

export const getDetail = (name: string) => {
  return axios.get(`${BASE_URL}/users/${name}`);
};
