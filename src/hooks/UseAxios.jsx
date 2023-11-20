import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const UseAxios = () => {
  return instance;
};

export default UseAxios;
