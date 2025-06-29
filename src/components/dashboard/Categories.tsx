import React from "react";

const Categories: React.FC = () => {
  // Static data for the categories list
  const categoryData = [
    {
      icon: "https://img.icons8.com/fluency-systems-filled/48/monitor.png", // Placeholder for device icon
      title: "Devices",
      description: "250 in stock, 346+ sold",
    },
    {
      icon: "https://img.icons8.com/material/48/tag.png", // Placeholder for tickets icon
      title: "Tickets",
      description: "123 closed, 15 open",
    },
    {
      icon: "https://img.icons8.com/material-rounded/24/package.png", // Placeholder for error logs icon
      title: "Error logs",
      description: "1 is active, 40 closed",
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/happy--v1.png", // Placeholder for happy users icon
      title: "Happy users",
      description: "+ 430",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md font-inter w-full">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Categories</h2>

      <ul className="space-y-4">
        {/* Added space-y for vertical gap between list items */}
        {categoryData.map((category, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <div className="flex items-center">
              {/* Icon */}
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700 mr-4 shadow-sm">
                <img
                  width="50"
                  height="50"
                  src={category.icon}
                  alt="happy--v1"
                  className="w-5 h-5"
                />
              </div>
              {/* Title and Description */}
              <div>
                <p className="text-gray-800 font-semibold text-base">
                  {category.title}
                </p>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
            {/* Right Arrow Icon */}
            <span className="text-gray-500 text-xl font-bold">›</span>
            {/* Using unicode for arrow */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
