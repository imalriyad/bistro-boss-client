/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Private = ({ children }) => {
  const { user, isLoading } = useAuth();
  if(isLoading){
    return <div className="max-w-screen-lg text-center mx-auto my-[10%]"><span className="loading loading-spinner loading-lg"></span></div>
  }
  if (user) {
    return  children ;
  }

  return <Navigate to={"/Login"}></Navigate>;
};

export default Private;
