import React from "react";

// Define the props interface for an individual Invoice item
interface InvoiceItemProps {
  date: string;
  invoiceId: string;
  amount: string;
}

// InvoiceItem component for a single invoice entry
const InvoiceItem: React.FC<InvoiceItemProps> = ({
  date,
  invoiceId,
  amount,
}) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
      <div>
        <div className="text-gray-800 font-medium">{date}</div>
        <div className="text-sm text-gray-500">#{invoiceId}</div>
      </div>
      <div className="flex items-center space-x-4 text-sm">
        <div className="text-gray-800 font-semibold">{amount}</div>
        <a
          href="#" // Placeholder for actual PDF link
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200 text-sm"
          onClick={(e) => e.preventDefault()} // Prevent default link behavior for demo
        >
          PDF
        </a>
      </div>
    </div>
  );
};

export default InvoiceItem;
