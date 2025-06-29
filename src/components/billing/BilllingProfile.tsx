import React from "react";

// Define the props interface for a single BillingProfile item
interface BillingProfileProps {
  name: string;
  companyName: string;
  email: string;
  vatNumber: string;
}

// BillingProfile component for a single billing entry
const BillingProfile: React.FC<BillingProfileProps> = ({
  name,
  companyName,
  email,
  vatNumber,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl mb-4 last:mb-0">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex space-x-4">
          <button className="text-red-600 hover:text-red-800 transition-colors duration-200 text-sm font-medium">
            Delete
          </button>
          <button className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 text-sm font-medium">
            Edit
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-600 space-y-1">
        <p>
          Company Name:{" "}
          <span className="font-medium text-gray-800">{companyName}</span>
        </p>
        <p>
          Email Address:{" "}
          <span className="font-medium text-gray-800">{email}</span>
        </p>
        <p>
          VAT Number:{" "}
          <span className="font-medium text-gray-800">{vatNumber}</span>
        </p>
      </div>
    </div>
  );
};

export default BillingProfile;
