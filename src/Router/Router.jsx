import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Form/Login";
import Registration from "../Form/Registration";
import Dashboard from "../Dashboard/Dashboard";
import ManageItem from "../Dashboard/ManageItem/ManageItem";
import Private from "../Private/Private";
import AllUser from "../Dashboard/All User/AllUser";
import AdminRoute from "../Private/AdminRoute";
import AddItem from "../Dashboard/AddItem";
import Cart from "../Dashboard/Cart/Cart";
import Payment from "../PaymentGetway/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Our Menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/Our Shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "Dashboard",
    element: (
      <Private>
        <Dashboard></Dashboard>
      </Private>
    ),
    children: [
      {
        path: "/Dashboard/manage-items",
        element: (
          <Private>
            <ManageItem></ManageItem>
          </Private>
        ),
      },
      {
        path: "/Dashboard/all-user",
        element: (
          <Private>
            <AllUser></AllUser>
          </Private>
        ),
      },
      {
        path: "/Dashboard/add-items",
        element: (
          <Private>
            <AdminRoute>
              <AddItem></AddItem>
            </AdminRoute>
          </Private>
        ),
      },

      {
        path: "/Dashboard/home",
        element: <Home></Home>,
      },
      {
        path: "/Dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/Dashboard/cheakout",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
