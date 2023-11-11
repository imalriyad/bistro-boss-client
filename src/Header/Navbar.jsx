import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navitem = ["Home", "CONTACT US", "DASHBOARD", "Our Menu", "Our Shop"];

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
      to={`/${link === "Home" ? "" : link}`}
      onClick={closeMobileMenu}
    >
      {link}
    </NavLink>
  ));

  return (
    <div className="max-w-screen-2xl mx-auto">
      <header className="bg-black bg-opacity-70 text-white max-w-screen-2xl w-full fixed z-10">
        <div className="mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 flex md:flex-row flex-col md:gap-3">
              <img src="https://i.postimg.cc/s20qNBMw/logo.png" width={40} alt="" />
              <h1 className="md:text-2xl text-lg font-semibold text-white">BistroBoss</h1>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">{menuItem}</ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-[#CD9003] px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/"
                  >
                    Login
                  </a>
                </div>

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
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
