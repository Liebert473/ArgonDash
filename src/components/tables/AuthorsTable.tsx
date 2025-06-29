import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AuthorData {
  avatarUrl: string;
  name: string;
  email: string;
  function: string;
  status: "Online" | "Offline";
  employed: string; // Date or string
}

// Static data for the Authors Table
const authorsData: AuthorData[] = [
  {
    avatarUrl:
      "https://photo-cdn2.icons8.com/5E1byBOzXi_Uw614Ud7IishgHKzu62-TEnv9-dRav4I/rs:fit:576:864/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODM5L2U3ZGE3/YzI0LWVlZjMtNDUz/Zi1iMzY2LWM0MDQ2/NjY0ZmVkYS5qcGc.webp",
    name: "John Michael",
    email: "john@creative-tim.com",
    function: "Manager\nOrganization",
    status: "Online",
    employed: "23/04/18",
  },
  {
    avatarUrl:
      "https://photo-cdn2.icons8.com/mExqna6q1UxOqvL210anOJgD6c1ForfNhJay2ebGsoY/rs:fit:576:864/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTAxLzU0ZjNm/ZDZiLTAyOGEtNDUw/OC05N2I1LTUwZDRl/Y2Q2ZTBkMC5qcGc.webp",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    function: "Programator\nDeveloper",
    status: "Offline",
    employed: "11/01/19",
  },
  {
    avatarUrl:
      "https://photo-cdn2.icons8.com/nED9b1JL_S0Ev468J3zkEx4FooHmit-xykKznf6xGvQ/rs:fit:576:864/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODY5L2MxNGE5/OTgyLWI1NzMtNDhm/MS1iM2ZjLWZmYWQz/YTlmNmEwMS5qcGc.webp",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    function: "Executive\nProjects",
    status: "Online",
    employed: "19/09/17",
  },
  {
    avatarUrl:
      "https://photo-cdn2.icons8.com/A5WKDQT9TdEDFQC7LyEoyDk67xtouZbgbWDicJD3Wbg/rs:fit:576:864/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNjY2LzFlNzg5/MGY5LWMxZDYtNGE0/Zi05NTBmLTFlNWRm/NjE4Mjk3Yi5qcGc.webp",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    function: "Programator\nDeveloper",
    status: "Online",
    employed: "24/12/08",
  },
  {
    avatarUrl:
      "https://photo-cdn2.icons8.com/K6hmT5lQO4AAX3MKSWOWR57WZO8YPHgWUGNZpUKIpvw/rs:fit:576:864/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTg2L2IxN2Fj/MTNmLTFkMjMtNDNj/NC1hMWE4LTIwMGM0/MjUxMzc5OC5qcGc.webp",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    function: "Manager\nExecutive",
    status: "Offline",
    employed: "04/10/21",
  },
  {
    avatarUrl:
      "https://photo-cdn2.icons8.com/yHNJTWCaEHRL8ruwKvG-c0txYLFOPgofVZ9CF9V7ixQ/rs:fit:576:864/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMTkzL2ZiODRk/NmFkLWFjNmEtNDYz/MS1iMmFiLWMxZGI5/MDNmNDFmOS5qcGc.webp",
    name: "Miriam Eric",
    email: "miriam@creative-tim.com",
    function: "Programator\nDeveloper",
    status: "Offline",
    employed: "14/09/20",
  },
];

const AuthorsTable: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg font-inter w-full">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Authors table
      </h2>

      <div className="overflow-x-auto">
        {" "}
        {/* Added for horizontal scrolling on small screens */}
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHeader className="bg-gray-50 rounded-t-lg">
            <TableRow>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Function
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employed
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {/* Empty header for the Edit button column */}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {authorsData.map((author, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover mr-4 shrink-0"
                      src={author.avatarUrl}
                      alt={author.name}
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/40x40/CCCCCC/000000?text=${author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}`;
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {author.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {author.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-pre-line text-sm text-gray-700">
                  {" "}
                  {/* whitespace-pre-line for newlines */}
                  {author.function}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`
                    px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${
                      author.status === "Online"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }
                  `}
                  >
                    {author.status}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {author.employed}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a className="text-blue-600 hover:text-blue-900 cursor-pointer">
                    Edit
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AuthorsTable;
