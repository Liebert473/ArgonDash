import React from "react";
import { useState, useEffect } from "react";
import SideNavBar from "@/components/common/SideNavBar";
import Navbar from "@/components/common/NavBar";
import { useLocation } from "react-router-dom";
import Footer from "@/components/common/Footer";
import CreditCard from "@/components/billing/CreditCard";
import PaymentCard from "@/components/billing/PaymentCard";
import PaymentCardList from "@/components/billing/PaymentCardList";
import InvoiceList from "@/components/billing/InvoiceList";
import BillingProfileList from "@/components/billing/BillingProfileList";
import TransactionList from "@/components/billing/TransactionList";

const BillingPage: React.FC = () => {
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
        {/** Row-1 */}
        <div className="flex px-4 my-6 gap-6 flex-col lg:flex-row">
          <div className="flex flex-col w-full gap-6">
            <div className="flex w-full gap-6 flex-col xl:flex-row">
              <div className="flex w-full">
                <CreditCard />
              </div>
              <div className="flex w-full gap-6 flex-col md:flex-row">
                <PaymentCard
                  title="Salary"
                  subtitle="Belong Interactive"
                  amount="+$2000"
                  iconBgColor="bg-blue-500" // Example color
                  icon="https://img.icons8.com/ios-filled/50/FFFFFF/get-cash.png"
                />

                {/* Paypal Card */}
                <PaymentCard
                  title="Paypal"
                  subtitle="Freelance Payment"
                  amount="$455.00"
                  iconBgColor="bg-blue-500" // Example color
                  icon="https://img.icons8.com/ios-filled/50/FFFFFF/paypal.png"
                />
              </div>
            </div>
            <div className="w-full">
              {/* Payment Cards List */}
              <PaymentCardList />
            </div>
          </div>
          <div className="flex w-full lg:w-6/12">
            <InvoiceList />
          </div>
        </div>
        {/** Row-2 */}
        <div className="flex mb-6 px-4 gap-6 flex-col lg:flex-row">
          <BillingProfileList />
          <TransactionList />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default BillingPage;
