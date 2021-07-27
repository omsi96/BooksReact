import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://thm-books-api.herokuapp.com/",
});
export default axiosInstance;
