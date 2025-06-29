import React from "react";

// This component is purely for UI presentation and contains its own static data.
const SalesByCountryTable: React.FC = () => {
  // Data for the table is defined directly inside this component
  const countrySalesData = [
    {
      countryName: "United States",
      flagEmoji: "🇺🇸",
      sales: "2500",
      value: "$230,900",
      bounce: "29.9%",
    },
    {
      countryName: "Germany",
      flagEmoji: "🇩🇪",
      sales: "3.900",
      value: "$440,000",
      bounce: "40.22%",
    },
    {
      countryName: "Great Britain",
      flagEmoji: "🇬🇧",
      sales: "1.400",
      value: "$190,700",
      bounce: "23.44%",
    },
    {
      countryName: "Brazil",
      flagEmoji: "🇧🇷",
      sales: "562",
      value: "$143,960",
      bounce: "32.14%",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md font-inter w-full relative">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Sales by Country
      </h2>

      <div className="overflow-x-auto">
        {" "}
        {/* For responsive tables on small screens */}
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 rounded-t-lg">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Country
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sales
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Value
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Bounce
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {countrySalesData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{row.flagEmoji}</span>
                    <span className="text-sm font-medium text-gray-900">
                      {row.countryName}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {row.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {row.value}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {row.bounce}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesByCountryTable;
