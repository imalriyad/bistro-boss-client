import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import useCart from "../../hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
  const [cartItems, refetch] = useCart();
  const totoalExpense = cartItems?.reduce(
    (prev, current) => prev + current.price,
    0
  );

  return (
    <div>
      <SectionTitle
        subHeading="Hurry Up!"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>

      <div>
        <div className="flex justify-between gap-4 items-center">
          {" "}
          <h1 className="text-2xl font-semibold ">
            Total items Found: {cartItems?.length}
          </h1>
          <h1 className="text-2xl font-semibold my-2">
            Total Cost: ${totoalExpense}
          </h1>
          {cartItems.length < 1 ? (
            <div className="text-right">
              <button disabled className="btn btn-success btn-sm ">
                Pay
              </button>
            </div>
          ) : (
            <Link to={"/Dashboard/cheakout"}>
              <div className="text-right my-4">
                <button className="btn btn-success btn-sm ">Pay</button>
              </div>
            </Link>
          )}
        </div>

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
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((food, id) => (
                <CartTable
                  key={food._id}
                  food={food}
                  id={id}
                  refetch={refetch}
                ></CartTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
