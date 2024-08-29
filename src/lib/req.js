import axios from "axios";
// import uuid4 from "uuid4";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const req = axios.create({
  baseURL: baseURL,
  timeout: 3000,
});

// REQUEST
req.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    const lang = sessionStorage.getItem("language");

    // config.headers.Authorization = `Bearer ${token}`;
    config.headers["Accept"] = "application/json";

    config.headers["X_From"] = "website";
    config.headers["X_Lang"] = lang;



    return config;
  },
  (error) => {
    console.log("internal error");
    Promise.reject(error);
  },
);

// RESPONSE
req.interceptors.response.use(
  (response) => {

    
    return response;
  },
  (error) => {
    const { response, config } = error;
    // if (response.status === 401) {
    //   localStorage.removeItem("token");
    //   return window.location.reload();
    // }

    // if (response.status == 403 && globalRouter.navigate) {
    //   globalRouter.navigate("/not-authorized");
    // }
    // if (response.status == 404 && globalRouter.navigate) {
    //   globalRouter.navigate("/not-found");
    // }
    // if (response.status == 500 && globalRouter.navigate) {
    //   globalRouter.navigate("/server-error");
    // }
    return Promise.reject(error);
  },
);

export default req;