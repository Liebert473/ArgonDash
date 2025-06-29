import React from "react";
// Recharts imports remain
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const salesData = [
  { name: "Apr", sales: 400 },
  { name: "May", sales: 250 },
  { name: "Jun", sales: 300 },
  { name: "Jul", sales: 280 },
  { name: "Aug", sales: 500 },
  { name: "Sep", sales: 350 },
  { name: "Oct", sales: 420 },
  { name: "Nov", sales: 280 },
  { name: "Dec", sales: 500 },
];

const SalesOverviewChart: React.FC = () => {
  return (
    <div className="w-full rounded-xl shadow-md bg-white overflow-hidden font-inter">
      <div className="pb-2 p-6">
        <h3 className="text-xl font-semibold text-gray-800">Sales Overview</h3>
        <p className="text-sm text-gray-600">4% more in 2021</p>
      </div>
      <div className="p-6 pt-0">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={salesData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => value}
                className="text-xs text-gray-500"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value}`}
                className="text-xs text-gray-500"
              />
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e0e0e0"
              />{" "}
              {/* Only horizontal grid lines */}
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                }}
                labelStyle={{ color: "#555" }}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewChart;
