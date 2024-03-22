import axios from "axios";
import { apiConstants } from "../constants/apiContants";
import toastService from "./toastService";

const Axios = axios.create({
  baseURL: apiConstants.baseUrl,
  headers: { "Content-Type": "application/json" },
});

Axios.interceptors.response.use(
  (response) => {
    toastService.showSuccessToast("Success!");
    return response;
  },
  (error) => {
    toastService.showErrorToast("Failure");
    return error;
  }
);

Axios.interceptors.request.use(
  (config) => {
    // const token = getItemInLocalStorage("authToken");

    // if (!config.headers["Authorization"] && token != undefined)
    //   config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => error
);

export default Axios;
