import React from "react";
import InvoiceItem from "./InvoiceItem";

const InvoiceList: React.FC = () => {
  // Sample invoice data
  const invoices = [
    { date: "March, 01, 2020", invoiceId: "MS-415646", amount: "$180" },
    { date: "February, 10, 2021", invoiceId: "RV-126749", amount: "$250" },
    { date: "April, 05, 2020", invoiceId: "FB-212562", amount: "$560" },
    { date: "June, 25, 2019", invoiceId: "QW-103578", amount: "$120" },
    { date: "March, 01, 2019", invoiceId: "AR-803481", amount: "$300" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full h-fit">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Invoices</h2>
        <button className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-50 transition-colors duration-200">
          View All
        </button>
      </div>

      {/* Invoices List */}
      <div className="flex flex-col overflow-y-auto max-h-120">
        {invoices.map((invoice, index) => (
          <InvoiceItem
            key={index} // Using index as key for demo, use unique ID in real app
            date={invoice.date}
            invoiceId={invoice.invoiceId}
            amount={invoice.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default InvoiceList;
