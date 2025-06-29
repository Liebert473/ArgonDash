import React from "react";
import BillingProfile from "./BilllingProfile";

const BillingProfileList: React.FC = () => {
  // Sample billing data
  const billingProfiles = [
    {
      name: "Oliver Liam",
      companyName: "Viking Burrito",
      email: "oliver@burrito.com",
      vatNumber: "FRB1235476",
    },
    {
      name: "Lucas Harper",
      companyName: "Stone Tech Zone",
      email: "lucas@stone-tech.com",
      vatNumber: "FRB1235476",
    },
    {
      name: "Ethan James",
      companyName: "Fiber Notion",
      email: "ethan@fiber.com",
      vatNumber: "FRB1235476",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Billing Information
        </h2>
      </div>

      {/* Billing Profiles List */}
      <div>
        {billingProfiles.map((profile, index) => (
          <BillingProfile
            key={index} // Using index as key for demo, use unique ID in real app
            name={profile.name}
            companyName={profile.companyName}
            email={profile.email}
            vatNumber={profile.vatNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default BillingProfileList;
