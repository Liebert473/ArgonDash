import TransactionItem from "./TransactionItem";
import React from "react";

const TransactionList: React.FC = () => {
  // Sample transaction data
  const transactions = {
    newest: [
      {
        vendor: "Netflix",
        date: "27 March 2020",
        time: "12:30 PM",
        amount: "- $ 2,500",
        type: "debit",
      },
      {
        vendor: "Apple",
        date: "27 March 2020",
        time: "04:30 AM",
        amount: "+ $ 2,000",
        type: "credit",
      },
    ],
    yesterday: [
      {
        vendor: "Stripe",
        date: "26 March 2020",
        time: "13:45 PM",
        amount: "+ $ 750",
        type: "credit",
      },
      {
        vendor: "HubSpot",
        date: "26 March 2020",
        time: "12:30 PM",
        amount: "+ $ 1,000",
        type: "credit",
      },
      {
        vendor: "Creative Tim",
        date: "26 March 2020",
        time: "08:30 AM",
        amount: "+ $ 2,500",
        type: "credit",
      },
      {
        vendor: "Webflow",
        date: "26 March 2020",
        time: "05:00 AM",
        amount: "Pending",
        type: "pending",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Your Transactions
        </h2>
        <span className="text-sm text-gray-500">23 - 30 March 2020</span>
      </div>

      {/* NEWEST Transactions */}
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
          NEWEST
        </h3>
        {transactions.newest.map((transaction, index) => (
          <TransactionItem
            key={`newest-${index}`} // Unique key for each item
            vendor={transaction.vendor}
            date={transaction.date}
            time={transaction.time}
            amount={transaction.amount}
            type={transaction.type as "credit" | "debit" | "pending"} // Type assertion
          />
        ))}
      </div>

      {/* YESTERDAY Transactions */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
          YESTERDAY
        </h3>
        {transactions.yesterday.map((transaction, index) => (
          <TransactionItem
            key={`yesterday-${index}`} // Unique key for each item
            vendor={transaction.vendor}
            date={transaction.date}
            time={transaction.time}
            amount={transaction.amount}
            type={transaction.type as "credit" | "debit" | "pending"} // Type assertion
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
