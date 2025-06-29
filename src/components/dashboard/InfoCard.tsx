import React from "react";

interface InfoCardProps {
  title: string; // e.g., "TODAY'S MONEY"
  value: string; // e.g., "$53,000"
  percentage: string; // e.g., "+55%" or "-2%"
  percentageColor: "green" | "red"; // Controls the text color of the percentage
  sinceText: string; // e.g., "since yesterday"
  icon: string; // The icon element itself (e.g., <span> or custom SVG)
  iconBgColor: string; // Tailwind class for icon's background color (e.g., 'bg-blue-500')
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  percentage,
  percentageColor,
  sinceText,
  icon,
  iconBgColor,
}) => {
  const percentageTextColorClass =
    percentageColor === "green" ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex-1 w-auto flex flex-col justify-between font-inter">
      <div className="flex justify-between items-start mb-4">
        {/* Card Title and Value */}
        <div>
          <p className="text-gray-500 text-sm uppercase font-semibold mb-1">
            {title}
          </p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBgColor}`}
        >
          <img
            width="90"
            height="90"
            src={icon}
            alt="money--v1"
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Percentage Change */}
      <div className="text-sm">
        <span className={`${percentageTextColorClass} font-bold mr-1`}>
          {percentage}
        </span>
        <span className="text-gray-600">{sinceText}</span>
      </div>
    </div>
  );
};

export default InfoCard;
