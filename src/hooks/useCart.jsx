import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import UseAxios from "./UseAxios";
const useCart = () => {
  const axios = UseAxios();
  const { user } = useAuth();
  const {data:cartItems = [],refetch } = useQuery({
    queryKey: ["cartitem"],
    queryFn: async () => {
      const res = await axios.get(`/get-cart?email=${user?.email}`);
      return res.data;
    },
  });
 return [cartItems,refetch]
};

export default useCart;
