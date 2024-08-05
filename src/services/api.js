import axios from "axios";
const baseURL = "http://localhst:5000/api/v1";
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
