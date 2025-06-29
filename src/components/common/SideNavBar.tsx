import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";

interface Props {
  openNav: boolean;
}

const SideNavBar: React.FC<Props> = ({ openNav }) => {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <aside
      className={`flex fixed inset-y-0 left-0 w-full antialiased transition-transform ease duration-200 max-w-68 z-990 p-5 ${
        openNav ? "" : "-translate-x-full"
      } xl:translate-x-0`}
    >
      <div className="flex flex-col items-center justify-between w-full overflow-y-auto h-full rounded-2xl bg-white shadow-xl">
        {/* Sidebar Header/Logo */}
        <div className="h-19 border-b border-gray-200 dark:border-slate-700">
          <a className="flex items-center px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700">
            <span className="inline-block text-2xl align-middle mr-2">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/96/dashboard-layout.png"
                alt="dashboard-layout"
              />
            </span>
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
              ArgonDash
            </span>
          </a>
        </div>

        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        {/* Navigation Links */}
        <div className="items-center block w-full overflow-y-auto grow basis-full mt-4">
          <ul className="flex flex-col pl-0 mb-0">
            {/* Dashboard Link - Active State Example */}
            <li className="mt-1 w-full">
              <a
                className={`p-3 ${
                  path == "/dashboard"
                    ? "text-slate-700 bg-blue-500/13 font-semibold"
                    : "hover:bg-gray-100"
                } dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors cursor-pointer`}
                onClick={() => navigate("/dashboard")}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center p-2.5">
                  <span className="relative top-0 text-lg leading-normal">
                    <img
                      width="100"
                      height="100"
                      src="https://img.icons8.com/ios/100/1976D2/performance-macbook.png"
                      alt="performance-macbook"
                      className="min-w-4 min-h-4"
                    />
                  </span>
                  {/* Placeholder icon */}
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Dashboard
                </span>
              </a>
            </li>

            {/* Tables Link */}
            <li className="mt-1 w-full">
              <a
                className={`${
                  path == "/tables"
                    ? "text-slate-700 bg-blue-500/13 font-semibold"
                    : "hover:bg-gray-100"
                } dark:text-white dark:opacity-80 p-3 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors rounded-lg cursor-pointer`}
                onClick={() => navigate("/tables")}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center p-2.5">
                  <span className="relative top-0 text-lg leading-normal">
                    <img
                      width="96"
                      height="96"
                      src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/FC9319/external-formulae-table-with-row-and-column-cells-table-regular-tal-revivo.png"
                      alt="external-formulae-table-with-row-and-column-cells-table-regular-tal-revivo"
                      className="min-w-4 min-h-4"
                    />
                  </span>
                  {/* Placeholder icon */}
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Tables
                </span>
              </a>
            </li>

            {/* Billing Link */}
            <li className="mt-1 w-full">
              <a
                className={`${
                  path == "/billing"
                    ? "text-slate-700 bg-blue-500/13 font-semibold"
                    : "hover:bg-gray-100"
                } dark:text-white dark:opacity-80 p-3 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors rounded-lg cursor-pointer`}
                onClick={() => navigate("/billing")}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center p-2.5">
                  <span className="relative top-0 text-lg leading-normal">
                    <img
                      width="90"
                      height="90"
                      src="https://img.icons8.com/ios-glyphs/90/20C997/bank-card-back-side.png"
                      alt="bank-card-back-side"
                      className="min-w-4 min-h-4"
                    />
                  </span>
                  {/* Placeholder icon */}
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Billing
                </span>
              </a>
            </li>

            {/* Profile Link */}
            <li className="mt-1 w-full">
              <a
                className={`${
                  path == "/profile"
                    ? "text-slate-700 bg-blue-500/13 font-semibold"
                    : "hover:bg-gray-100"
                } dark:text-white dark:opacity-80 p-3 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors rounded-lg cursor-pointer`}
                onClick={() => navigate("/profile")}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center p-2.5">
                  <span className="relative top-0 text-lg leading-normal">
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/pastel-glyph/64/person-male--v3.png"
                      alt="person-male--v3"
                      className="min-w-4 min-h-4"
                    />
                  </span>
                  {/* Placeholder icon */}
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Profile
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Documentation and Upgrade Card */}
        <div className="mx-4 mb-4 mt-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
            {/* Placeholder for image */}
            <img
              className="w-1/2 mx-auto"
              src="https://img.icons8.com/fluency/200/product-documents.png"
              alt="sidebar illustrations"
            />
            <div className="flex-auto w-full p-4 pt-0 text-center">
              <div className="transition-all duration-200 ease-nav-brand">
                <h6 className="mb-0 dark:text-white">Need help?</h6>
                <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                  Please check our docs
                </p>
              </div>
            </div>
          </div>
          <a
            target="_blank"
            className="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px"
          >
            Documentation
          </a>
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
};

export default SideNavBar;
