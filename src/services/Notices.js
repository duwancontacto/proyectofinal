import axios from "axios";
import config from "../config.json";

export const getNotices = () => {
  return axios.get(`${config.baseUrl}/notices`);
};
export const createNotice = (notice) => {
  return axios.post(`${config.baseUrl}/notices`, notice);
};
export const updateNotice = (notice) => {
  return axios.put(`${config.baseUrl}/notices/${notice.id}`, notice);
};
export const deleteNotice = (noticeId) => {
  return axios.delete(`${config.baseUrl}/notices/${noticeId}`);
};
