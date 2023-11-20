/* eslint-disable react/prop-types */
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import swal from "sweetalert";
import UseAxios from "../../hooks/UseAxios";
const UserTable = ({ id, user, refetch }) => {
  const axios = UseAxios();
  const handleDelete = (_id) => {
   
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/user/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            swal(`Poof! ${user?.name} item has been deleted!`, {
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  return (
    <>
      <tr>
        <th>
          <td> {id + 1}</td>
        </th>

        <td>{user?.name}</td>
        <td>{user?.email}</td>

        <td>
          <FaUsers className="text-3xl cursor-pointer"></FaUsers>
        </td>
        <td>
          <RiDeleteBin5Fill
            onClick={() => handleDelete(user?._id)}
            className="text-2xl cursor-pointer text-[#B91C1C]"
          ></RiDeleteBin5Fill>
        </td>
      </tr>
    </>
  );
};

export default UserTable;
