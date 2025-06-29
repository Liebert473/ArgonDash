import React from "react";
import { useState, useEffect } from "react";
import SideNavBar from "@/components/common/SideNavBar";
import Navbar from "@/components/common/NavBar";
import { useLocation } from "react-router-dom";
import AuthorsTable from "@/components/tables/AuthorsTable";
import ProjectsTable from "@/components/tables/ProjectsTable";
import Footer from "@/components/common/Footer";

const TablesPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="m-0 font-sans text-base antialiased font-normal leading-6 bg-gray-50 text-slate-500 border-0 border-transparent">
      <div className="absolute w-full h-[40vh] bg-blue-500 z-0"></div>
      {/** Sidenav */}
      <SideNavBar openNav={openNav} />
      {/** Main Content */}
      <main className="w-auto xl:ml-70 border-transparent border transition-all duration-200 ease z-50 relative min-h-screen">
        {/** NavBar */}
        <Navbar openNav={openNav} scrolled={scrolled} toggleNav={toggleNav} />
        <div className="flex px-4 my-6">
          <AuthorsTable />
        </div>
        <div className="flex px-4">
          <ProjectsTable />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default TablesPage;
