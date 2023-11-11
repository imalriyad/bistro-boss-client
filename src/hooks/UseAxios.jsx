import axios from "axios";
const instance = axios.create({
  baseURL: "",
});

const UseAxios = () => {
  return instance;
};

export default UseAxios;
