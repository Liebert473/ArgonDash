import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "@/components/common/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";

interface NavBar {
  scrolled: boolean;
  toggleNav: () => void;
  openNav: boolean;
}

const Navbar: React.FC<NavBar> = ({ scrolled, toggleNav, openNav }) => {
  const path = useLocation().pathname;
  const pathName = path.charAt(1).toUpperCase() + path.slice(2);
  const navigate = useNavigate();

  return (
    <nav
      className={`sticky top-4 z-50 flex items-center justify-between px-0 py-2 mx-6
      transition-all ease-in duration-250 rounded-2xl lg:justify-start
      ${
        scrolled
          ? "backdrop-filter backdrop-blur-md bg-white/80 shadow-md"
          : "bg-transparent"
      }
      font-inter`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 py-1 mx-auto">
        {/* Breadcrumb Section */}
        <nav className="flex sm:flex-col flex-row" aria-label="Breadcrumb">
          <ol className="flex flex-wrap pt-1 mr-4 sm:mr-8 bg-transparent rounded-lg">
            <li className="text-sm leading-normal">
              <a
                className={`${scrolled ? "text-gray-400" : "text-gray-200"}`}
                href="#"
              >
                Pages
              </a>
            </li>
            <li
              className={`text-sm pl-2 capitalize leading-normal ${
                scrolled ? "text-gray-800 " : "text-white"
              } before:float-left before:pr-2 before:content-['/']`}
              aria-current="page"
            >
              {pathName}
            </li>
          </ol>

          <h6
            className={`mb-0 font-bold ${
              scrolled ? "text-gray-800 " : "text-white"
            } capitalize`}
          >
            {pathName}
          </h6>
        </nav>

        {/* Right Side: Search and Profile */}
        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          {/* Search Input */}
          <div className="flex items-center ml-auto pr-4">
            <SearchBar />
          </div>

          {/* User Profile and Hamburger Menu */}
          <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
            {/* Profile Icon/Link */}
            <li className="flex items-center">
              <a
                onClick={() => navigate("/profile")}
                className="block px-0 py-2 text-sm font-semibold text-gray-800 transition-all ease-nav-brand cursor-pointer"
              >
                <Avatar className="rounded-full w-10 h-10 border">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </a>
            </li>

            {/* Hamburger Menu Icon (visible only on XL screens and smaller) */}
            <li className="flex items-center pl-4 xl:hidden">
              <a
                className="block p-0 text-sm text-gray-800 transition-all ease-nav-brand cursor-pointer"
                onClick={toggleNav}
              >
                <div className="w-4.5 overflow-hidden flex flex-col items-end">
                  {/* Placeholder for Menu Icon (hamburger) */}
                  <span
                    className={`transition-all duration-200 ease block h-0.5 rounded-sm ${
                      scrolled ? "bg-gray-800" : "bg-gray-200"
                    } ${openNav ? "w-3.5" : "w-full"} mb-0.75`}
                  ></span>
                  <span
                    className={`transition-all duration-200 ease block h-0.5 rounded-sm ${
                      scrolled ? "bg-gray-800" : "bg-gray-200"
                    } w-full mb-0.75`}
                  ></span>
                  <span
                    className={`transition-all duration-200 ease block h-0.5 rounded-sm ${
                      scrolled ? "bg-gray-800" : "bg-gray-200"
                    } ${openNav ? "w-4" : "w-full"}`}
                  ></span>
                  {/* <Menu size={20} /> if using lucide-react */}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
