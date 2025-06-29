import React from "react";

// Define the props interface for a single Transaction item
interface TransactionItemProps {
  vendor: string;
  date: string;
  time: string;
  amount: string;
  type: "credit" | "debit" | "pending"; // To determine color and sign
}

// TransactionItem component for a single transaction entry
const TransactionItem: React.FC<TransactionItemProps> = ({
  vendor,
  date,
  time,
  amount,
  type,
}) => {
  let amountColorClass = "";
  if (type === "credit") {
    amountColorClass = "text-green-600";
  } else if (type === "debit") {
    amountColorClass = "text-red-600";
  } else {
    amountColorClass = "text-gray-500"; // For 'pending'
  }

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center">
        {/* Circle icon placeholder */}
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            type === "debit" ? "border-red-400" : "border-green-400"
          } mr-3`}
        ></div>
        <div>
          <div className="text-gray-800 font-medium">{vendor}</div>
          <div className="text-xs text-gray-500">
            {date}, at {time}
          </div>
        </div>
      </div>
      <div className={`font-semibold text-sm ${amountColorClass}`}>
        {amount}
      </div>
    </div>
  );
};

export default TransactionItem;
