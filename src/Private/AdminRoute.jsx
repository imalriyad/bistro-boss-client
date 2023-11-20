/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";


const AdminRoute = ({children}) => {
    const { user, isLoading } = useAuth();
    const [isAdmin,isAdminLoading] = useUserRole()
    if(isLoading || isAdminLoading ){
        return <div className="max-w-screen-lg text-center mx-auto my-[10%]"><span className="loading loading-spinner loading-lg"></span></div>
      }
      if (user && isAdmin) {
        return children ;
      }
    
      return <Navigate to={"/Login"}></Navigate>;
    };

export default AdminRoute;