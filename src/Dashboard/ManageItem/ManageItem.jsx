import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Table from "./Table";

const ManageItem = () => {
  const [menu,refetch] = useMenu()
  return (
    <div>
      <SectionTitle
        subHeading="Hurry Up!"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>

      <div>
        <h1 className="text-4xl font-semibold my-2">Total items Found: {menu?.length}</h1>
        <div className="overflow-x-auto bg-white">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className=" bg-[#D1A054] text-white">
                <th className="p-6">No</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((food, id) => (
                <Table key={food._id} food={food} id={id} refetch={refetch}></Table>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
