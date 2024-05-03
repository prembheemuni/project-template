import axios from "axios";
import toastService from "./toastService";

const Axios = axios.create({
  // baseURL: apiConstants.baseUrl,
  headers: { "Content-Type": "application/json" },
});

const fetchNewToken = async () => {
  try{
    const response = await Axios.get("/refresh");
    return response;
    
  }catch(error){
    return error
  }
}

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

// Axios.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const prevRequest = error?.config
//     if(error?.response?.status === 403 && !prevRequest?.sent){
//       prevRequest.sent = true
//       const newToken = await fetchNewToken();
//       prevRequest.headers['Authorization'] = `Bearer ${newToken}`;
//       return Axios(prevRequest)
//     }
//     else{
//       return Promise.reject(error);
//     }
    
//   }
// );

export default Axios;
