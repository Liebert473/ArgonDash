import React from "react";
import { useState, useEffect } from "react";
import SideNavBar from "@/components/common/SideNavBar";
import Navbar from "@/components/common/NavBar";
import { useLocation } from "react-router-dom";
import Footer from "@/components/common/Footer";
import UserProfileHeader from "@/components/profile/UserProfileHeader";
import EditProfileForm from "@/components/profile/EditProfileForm";

const ProfilePage: React.FC = () => {
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
      <div className="flex bg-center bg-cover absolute w-full h-[40vh] bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg')]">
        <div className="w-full h-full bg-blue-500 opacity-60"></div>
      </div>
      {/** Sidenav */}
      <SideNavBar openNav={openNav} />
      {/** Main Content */}
      <main className="w-auto xl:ml-70 border-transparent border transition-all duration-200 ease z-50 relative min-h-screen">
        {/** NavBar */}
        <Navbar openNav={openNav} scrolled={scrolled} toggleNav={toggleNav} />
        {/** Row-1 */}
        <div className="flex px-4 mb-6 mt-48">
          <UserProfileHeader
            avatarSrc="https://github.com/shadcn.png" // Placeholder for Sayo Kravits
            name="Sayo Kravits"
            title="Public Relations"
          />
        </div>
        {/** Row-2 */}
        <div className="flex px-4 mb-6 gap-6">
          <EditProfileForm />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ProfilePage;
