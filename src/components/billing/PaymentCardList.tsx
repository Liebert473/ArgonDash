import React from "react";
import PaymentCardItem from "./PaymentCardItem";

const PaymentCardList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Payment Method</h2>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:shadow-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
          Add New Card
        </button>
      </div>

      {/* Payment Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PaymentCardItem type="mastercard" lastFourDigits="7852" />
        <PaymentCardItem type="visa" lastFourDigits="5248" />
      </div>
    </div>
  );
};

export default PaymentCardList;
