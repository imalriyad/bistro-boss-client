import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const useAxiospublic = () => {
  return axiosPublic;
};

export default useAxiospublic;
