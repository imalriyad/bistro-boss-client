/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import swal from "sweetalert";
import UseAxios from "../../hooks/UseAxios";

const Table = ({ food, id ,refetch}) => {
  const axios = UseAxios();
  const { name, _id, image, price } = food;
  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/delete-from-cart/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            swal(`Poof! ${name} item has been deleted!`, {
              icon: "success",
            });
          }
          refetch()
        });
      }
    });
  };
  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <td> {id + 1}</td>
        </th>
        <td>
          <div className="avatar">
            <div className="w-20 rounded">
              <img src={image} />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          <FaEdit className="text-2xl cursor-pointer text-[#D1A054]"></FaEdit>
        </td>
        <td>
          <RiDeleteBin5Fill
            onClick={() => handleDelete(_id)}
            className="text-2xl cursor-pointer text-[#B91C1C]"
          ></RiDeleteBin5Fill>
        </td>
      </tr>
    </>
  );
};

export default Table;
