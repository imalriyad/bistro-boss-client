import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const UseAxios = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // Add a request interceptor
    instance.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          logout()
            .then(() => {
              navigate("/Login");
            })
            .catch((error) => {
              console.log("Yay!", `${error.message}`, "error");
            });
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, logout]);
  return instance;
};

export default UseAxios;
