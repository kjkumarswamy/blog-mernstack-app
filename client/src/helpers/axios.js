import axios from "axios";
import { API } from "../urlConfig";

const token = localStorage.getItem("token");

const axiosInstace = axios.create({
  baseURL: API,
  headers: {
    authorization: token ? `Bearer ${token}` : null,
  },
});

export default axiosInstace;
