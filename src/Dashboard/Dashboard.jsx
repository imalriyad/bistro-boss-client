import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUserEdit } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdLibraryBooks, MdEmail } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoBag } from "react-icons/io5";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="flex  bg-[#E8E8E8]">
      {/* Sidebar menu */}
      <div className="menu w-[270px] px-2 py-6 bg-[#D1A054] h-screen menu-vertical">
        <h1 className="font-bold text-3xl px-4">BISTRO BOSS</h1>
        <p className="   tracking-widest px-4 font-semibold">Restaurant</p>

        <div className="mt-14">
          <NavLink
            to={"/Dashboard/admin-home"}
            className="flex flex-row items-center  uppercase gap-2 mb-4 font-medium px-3"
          >
            {" "}
            <FaHome className="text-3xl" />
            Admin Home
          </NavLink>
          <NavLink
            to={"/Dashboard/add-items"}
            className=" flex flex-row items-center   uppercase gap-2 mb-4 font-medium px-3"
          >
            {" "}
            <ImSpoonKnife className="text-3xl" />
            Add items
          </NavLink>
          <NavLink
            to={"/Dashboard/manage-items"}
            className=" flex flex-row items-center uppercase gap-2 mb-4 font-medium px-3"
          >
            {" "}
            <TiThMenu className="text-3xl" />
            Manage items
          </NavLink>
          <NavLink
            to={"/Dashboard/manage-bookings"}
            className=" flex flex-row items-center  uppercase gap-2 mb-4 font-medium px-3"
          >
            {" "}
            <MdLibraryBooks className="text-3xl" />
            Manage bookings
          </NavLink>
          <NavLink
            to={"/Dashboard/all-user"}
            className=" flex flex-row items-center  uppercase gap-2 mb-4 font-medium px-3"
          >
            {" "}
            <FaUserEdit className="text-3xl" />
            all users
          </NavLink>

          <div className="border-b py-4"></div>
          <div className="mt-4">
            <NavLink
              to="/"
              className=" flex flex-row items-center  uppercase gap-2 mb-4 font-medium px-3"
            >
              {" "}
              <FaHome className="text-3xl" /> Home
            </NavLink>
            <NavLink
              to={"/Dashboard/menu"}
              className=" flex flex-row items-center  uppercase gap-2 mb-4 font-medium px-3"
            >
              {" "}
              <TiThMenu className="text-3xl" />
              Menu
            </NavLink>
            <NavLink
              to={"/Dashboard/shop"}
              className=" flex flex-row items-center  uppercase gap-2 mb-4 font-medium px-3"
            >
              {" "}
              <IoBag className="text-3xl" />
              Shop
            </NavLink>
            <NavLink
              to={"/Dashboard/contact"}
              className=" flex flex-row items-center  uppercase gap-2 mb-4 font-medium px-3"
            >
              {" "}
              <MdEmail className="text-3xl" />
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[60%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
