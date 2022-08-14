import axios from "axios";
import config from "../config.json";

export const getUsers = () => {
  return axios.get(`${config.baseUrl}/users`);
};

export const getUserById = (user) => {
  return axios.get(`${config.baseUrl}/users/${user.id}`);
};

export const authUser = (form) => {
  return axios.post(`${config.baseUrl}/users/auth`, form);
};

export const createUser = (user) => {
  return axios.post(`${config.baseUrl}/users`, user);
};

export const updateUser = (user) => {
  return axios.put(`${config.baseUrl}/users/${user.id}`, user);
};
