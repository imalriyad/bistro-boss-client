import UseAxios from "./UseAxios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
  const { user } = useAuth();
  const axios = UseAxios()
  const { data: isAdmin ,isLoading:isAdminLoading} = useQuery({
    queryKey:['adminRole'],
    queryFn:async()=>{
        const res = await axios.get(`/getUserRole/${user?.email}`)
        return res.data
    }
  });

  return [isAdmin,isAdminLoading]
}

export default useUserRole;
