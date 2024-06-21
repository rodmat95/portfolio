import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
