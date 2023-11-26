import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import swal from "sweetalert";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [cartItems] = useCart();

  const navitem = ["Home", "CONTACT US", "Our Menu", "Our Shop","DASHBOARD"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItem = navitem.map((link) => (
    <NavLink
      className="uppercase mr-6 font-medium"
      key={link}
      to={`/${
        link === "Home" ? "" : link === "Our Shop" ? "Our Shop/salad" : link
      }`}
      onClick={closeMobileMenu}
    >
      {link}
    </NavLink>
  ));

  const handleLogout = () => {
    logout()
      .then(() => {
        swal("Yay!", "Logout Successfull", "success");
        navigate("/Login");
      })
      .catch((error) => {
        swal("Yay!", `${error.message}`, "error");
      });
  };

  const goCart = () => {
    navigate("/Dashboard/cart");
  };

  // Calculate cart item price
  const totalPrice = cartItems?.reduce((prev, current) => prev + current.price, 0);


  return (
    <div className="max-w-screen-2xl mx-auto">
      <header className="bg-black bg-opacity-70 text-white max-w-screen-2xl w-full fixed z-10">
        <div className="mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 flex md:flex-row flex-col md:gap-3">
              <img
                src="https://i.postimg.cc/s20qNBMw/logo.png"
                width={40}
                alt=""
              />
              <h1 className="md:text-2xl text-lg font-semibold text-white">
                BistroBoss
              </h1>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">{menuItem}</ul>
              </nav>

              <div className="flex items-center gap-4">
                {user ? (
                  <div className="flex-none mx-auto hidden md:block">
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="badge badge-sm indicator-item">
                            {cartItems?.length}
                          </span>
                        </div>
                      </label>
                      <div
                        tabIndex={0}
                        className="mt-3 z-[1] card card-compact dropdown-content w-48 bg-base-100 shadow"
                      >
                        <div className="card-body text-black text-left">
                          <span className="font-bold text-lg">
                            {cartItems?.length} Items
                          </span>
                          <span className="text-info">Subtotal: ${totalPrice}</span>
                          <div className="card-actions">
                            <button
                              onClick={goCart}
                              className="rounded-md bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow w-full"
                            >
                              View cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user?.photoURL}
                          />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
                      >
                        <button className="rounded-md bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow">
                          Profile
                        </button>
                        <button className="rounded-md bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow">
                          Setting
                        </button>

                        <button
                          onClick={handleLogout}
                          className="rounded-md bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow"
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/Login"
                    className="rounded-md text-center bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow"
                  >
                    Login
                  </Link>
                )}
                <div className="block md:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={toggleMobileMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col justify-start  space-y-4 bg-black opacity-90 font-medium text-white px-10 pt-24 pb-10">
            {menuItem}
            {user ? (
              <div className="sm:flex sm:gap-4 text-right">
                <div className="flex-none mx-auto">
                  <div className="dropdown mb-20 dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="badge badge-sm indicator-item">
                          {cartItems?.length}
                        </span>
                      </div>
                    </label>
                    <div
                      tabIndex={0}
                      className="card card-compact dropdown-content  w-48 bg-base-100 shadow"
                    >
                      <div className="card-body text-black text-left">
                        <span className="font-bold text-lg">
                          {cartItems?.length} Items
                        </span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                          <button
                            onClick={goCart}
                            className="rounded-md bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow w-full"
                          >
                            View cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user?.photoURL}
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
                    >
                      <button className="rounded-md bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow">
                        Profile
                      </button>

                      <button
                        onClick={handleLogout}
                        className="rounded-md bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/Login"
                className="rounded-md text-center bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
