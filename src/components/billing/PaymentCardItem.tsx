import React from "react";

// Define the props interface for the PaymentCardItem component
interface PaymentCardItemProps {
  type: "mastercard" | "visa";
  lastFourDigits: string;
}

// PaymentCardItem component
const PaymentCardItem: React.FC<PaymentCardItemProps> = ({
  type,
  lastFourDigits,
}) => {
  const cardLogo =
    type === "mastercard" ? (
      // Mastercard Logo - simplified SVG for demonstration
      <svg
        width="32"
        height="20"
        viewBox="0 0 32 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="#EB001B" />
        <circle cx="22" cy="10" r="10" fill="#F79E1B" />
        <path
          d="M16 0C10.4772 0 6 4.47715 6 10C6 15.5228 10.4772 20 16 20C21.5228 20 26 15.5228 26 10C26 4.47715 21.5228 0 16 0ZM16 2C11.5817 2 8 5.58172 8 10C8 14.4183 11.5817 18 16 18C20.4183 18 24 14.4183 24 10C24 5.58172 20.4183 2 16 2Z"
          fill="#FF5F00"
        />
      </svg>
    ) : (
      // Visa Logo - simplified text for demonstration
      <span className="font-bold text-blue-700 text-lg">VISA</span>
    );

  return (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="mr-4">{cardLogo}</div>
      <div className="font-mono text-gray-800">
        **** **** **** {lastFourDigits}
      </div>
    </div>
  );
};

export default PaymentCardItem;
