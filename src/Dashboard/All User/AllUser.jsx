import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import UseAxios from "../../hooks/UseAxios";
import UserTable from "./UserTable";
const AllUser = () => {
  const axios = UseAxios();
  const { data:users,refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/users");
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        subHeading={"How many??"}
        heading={"MANAGE ALL USERS"}
      ></SectionTitle>
       <div>
        <h1 className="text-4xl font-semibold my-2">Total Users Found: {users?.length}</h1>
        <div className="overflow-x-auto bg-white">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className=" bg-[#D1A054] text-white">
                <th className="p-6">No</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, id) => (
                <UserTable key={user._id} refetch={refetch} user={user} id={id}></UserTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
