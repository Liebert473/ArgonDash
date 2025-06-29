import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProjectData {
  icon: string; // URL to the icon image
  name: string;
  budget: string;
  status: "working" | "done" | "canceled";
  completion: number; // Percentage as a number (0-100)
}

// Static data for the Projects Table
const projectsData: ProjectData[] = [
  {
    icon: "https://img.icons8.com/?size=100&id=G9XXzb9XaEKX&format=png&color=000000", // Spotify icon placeholder
    name: "Spotify",
    budget: "$2,500",
    status: "working",
    completion: 60,
  },
  {
    icon: "https://img.icons8.com/?size=100&id=VTOjeBl8MaUy&format=png&color=000000", // Invision icon placeholder
    name: "Invision",
    budget: "$5,000",
    status: "done",
    completion: 100,
  },
  {
    icon: "https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000", // Jira icon placeholder
    name: "Jira",
    budget: "$3,400",
    status: "canceled",
    completion: 30,
  },
  {
    icon: "https://img.icons8.com/?size=100&id=OXVeOEj6qZqX&format=png&color=000000", // Slack icon placeholder
    name: "Slack",
    budget: "$1,000",
    status: "canceled",
    completion: 0,
  },
  {
    icon: "https://img.icons8.com/?size=100&id=hFuGKe550WR3&format=png&color=000000", // Webdev icon placeholder
    name: "Webdev",
    budget: "$14,000",
    status: "working",
    completion: 80,
  },
  {
    icon: "https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000", // Adobe XD icon placeholder
    name: "Adobe XD",
    budget: "$2,300",
    status: "done",
    completion: 100,
  },
];

const ProjectsTable: React.FC = () => {
  // Helper function to get status text color
  const getStatusColor = (status: ProjectData["status"]) => {
    switch (status) {
      case "working":
        return "text-blue-500";
      case "done":
        return "text-green-500";
      case "canceled":
        return "text-red-500";
      default:
        return "text-gray-700";
    }
  };

  // Helper function to get completion bar color
  const getCompletionBarColor = (completion: number) => {
    if (completion === 100) return "bg-green-500";
    if (completion > 0 && completion < 100) return "bg-blue-500";
    return "bg-gray-300"; // For 0% completion
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg font-inter w-full">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Projects table
      </h2>

      <div className="overflow-x-auto">
        {" "}
        {/* Added for horizontal scrolling on small screens */}
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Budget
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Completion
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {projectsData.map((project, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="p-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4">
                      <img
                        src={project.icon}
                        width={28}
                        alt={`${project.name} icon`}
                      />
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {project.name}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">
                  {project.budget}
                </TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm font-medium">
                  <span className={getStatusColor(project.status)}>
                    {project.status}
                  </span>
                </TableCell>
                <TableCell className="p-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm text-gray-700 mr-2">
                      {project.completion}%
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`${getCompletionBarColor(
                          project.completion
                        )} h-1.5 rounded-full`}
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProjectsTable;
