import React from "react";
import { useState, useEffect } from "react";
import SideNavBar from "@/components/common/SideNavBar";
import Navbar from "@/components/common/NavBar";
import { useLocation } from "react-router-dom";
import InfoCard from "@/components/dashboard/InfoCard";
import SalesOverviewChart from "@/components/dashboard/SaleOverViewChart";
import SalesByCountryTable from "@/components/dashboard/SaleByCountryTable";
import Categories from "@/components/dashboard/Categories";
import Footer from "@/components/common/Footer";

const DashboardPage: React.FC = () => {
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

  const cardData = [
    {
      title: "TODAY'S MONEY",
      value: "$53,000",
      percentage: "+55%",
      percentageColor: "green" as const, // Type assertion for string literal
      sinceText: "since yesterday",
      icon: "https://img.icons8.com/ios-glyphs/90/FFFFFF/money--v1.png", // Placeholder for money icon
      iconBgColor: "bg-indigo-500", // Example color
    },
    {
      title: "TODAY'S USERS",
      value: "2,300",
      percentage: "+3%",
      percentageColor: "green" as const,
      sinceText: "since last week",
      icon: "https://img.icons8.com/sf-black-filled/64/FFFFFF/conference-call.png", // Placeholder for users icon
      iconBgColor: "bg-red-500", // Example color
    },
    {
      title: "NEW CLIENTS",
      value: "+3,462",
      percentage: "-2%",
      percentageColor: "red" as const,
      sinceText: "since last quarter",
      icon: "https://img.icons8.com/fluency-systems-regular/50/FFFFFF/conclusion-contract.png", // Placeholder for clients icon
      iconBgColor: "bg-teal-500", // Example color
    },
    {
      title: "SALES",
      value: "$103,430",
      percentage: "+5%",
      percentageColor: "green" as const,
      sinceText: "than last month",
      icon: "https://img.icons8.com/material-outlined/50/FFFFFF/shopping-cart.png", // Placeholder for sales icon
      iconBgColor: "bg-orange-500", // Example color
    },
  ];

  return (
    <div className="m-0 font-sans text-base antialiased font-normal leading-6 bg-gray-50 text-slate-500 border-0 border-transparent">
      <div className="absolute w-full h-[40vh] bg-blue-500 z-0"></div>
      {/** Sidenav */}
      <SideNavBar openNav={openNav} />
      {/** Main Content */}
      <main className="w-auto xl:ml-70 border-transparent border transition-all duration-200 ease z-50 relative min-h-screen">
        {/** NavBar */}
        <Navbar openNav={openNav} scrolled={scrolled} toggleNav={toggleNav} />
        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-8 px-4">
          {cardData.map((card, index) => (
            <InfoCard
              key={index} // Use a unique key, ideally a real ID if fetching from data
              title={card.title}
              value={card.value}
              percentage={card.percentage}
              percentageColor={card.percentageColor}
              sinceText={card.sinceText}
              icon={card.icon}
              iconBgColor={card.iconBgColor}
            />
          ))}
        </div>
        <div className="flex gap-6 mb-6 px-4">
          <SalesOverviewChart />
          <div className="relative z-20 p-6 sm:p-8 lg:p-10 text-white overflow-hidden rounded-xl shadow-md w-7/12 hidden lg:block">
            <img
              src="src/assets/3D_things.png"
              className="absolute top-0 left-0 w-full h-full min-h-fit min-w-fit"
            />
            {/* Icon */}
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm relative z-20">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/glyph-neue/64/slr-camera.png"
                alt="slr-camera"
                className="w-4 h-4"
              />
              {/* Placeholder Camera Icon */}
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 relative z-20">
              Get started with Argon
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg max-w-2xl relative z-20">
              There's nothing I really wanted to do in life that I wasn't able
              to get good at.
            </p>
          </div>
        </div>
        <div className="flex gap-6 px-4 flex-wrap lg:flex-nowrap">
          <SalesByCountryTable />
          <Categories />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default DashboardPage;
