import axios from "axios";

const api = axios.create({
  baseURL: "http://localhosh:3000",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "Client2",
    "Accept": "application/json",
  },
});
