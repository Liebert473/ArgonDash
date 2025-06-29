import React from "react";

const AuthFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8 rounded-t-lg font-inter">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Navigation Links Section */}
        <nav className="flex flex-wrap justify-center md:gap-x-8 gap-y-2 mb-20 gap-x-4">
          <a
            href="#"
            className=" hover:text-blue-600 text-sm md:text-base font-medium rounded-md px-2 py-1 transition-colors duration-200"
          >
            Company
          </a>
          <a
            href="#"
            className=" hover:text-blue-600 text-sm md:text-base font-medium rounded-md px-2 py-1 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#"
            className=" hover:text-blue-600 text-sm md:text-base font-medium rounded-md px-2 py-1 transition-colors duration-200"
          >
            Team
          </a>
          <a
            href="#"
            className=" hover:text-blue-600 text-sm md:text-base font-medium rounded-md px-2 py-1 transition-colors duration-200"
          >
            Products
          </a>
          <a
            href="#"
            className=" hover:text-blue-600 text-sm md:text-base font-medium rounded-md px-2 py-1 transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="#"
            className=" hover:text-blue-600 text-sm md:text-base font-medium rounded-md px-2 py-1 transition-colors duration-200"
          >
            Pricing
          </a>
        </nav>

        {/* Copyright Section */}
        <div className=" text-xs md:text-sm text-center">
          Copyright &copy; {new Date().getFullYear()} Argon Dashboard 2 by
          Creative Tim.
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
