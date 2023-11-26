import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxiospublic";

const useMenu = () => {
  const axiosPublic = useAxiospublic();

  const { data: menu, refetch } = useQuery({
    queryKey: ["allData"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/get-all-foods`)
        return res.data;
      } catch (error) {
        console.error("Error fetching menu data:", error);
        throw error; // Rethrow the error so that it's captured by react-query
      }
    },
  });

  return [menu, refetch];
};

export default useMenu;

