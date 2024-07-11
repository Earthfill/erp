import { useState } from "react";
import { DashboardCard, Tabs, Welcome } from "../components";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

const tasks = [
  {
    employee: "Umar Tiamiyu",
    position: "Team Memeber",
    session: "2024 FY",
    status: "Approved",
    average: "30%",
  },
  {
    employee: "Umar Tiamiyu",
    position: "Team Memeber",
    session: "2024 FY",
    status: "Pending",
    average: "50%",
  },
  {
    employee: "Suleiman Abubakar",
    position: "Team Memeber",
    session: "2024 HY",
    status: "Pending",
    average: "60%",
  },
  {
    employee: "Suleiman Abubakar",
    position: "Team Memeber",
    session: "2023 HY",
    status: "Approved",
    average: "40%",
  },
  {
    employee: "Tomisin Ande",
    position: "Team Memeber",
    session: "2024 FY",
    status: "Disputed",
    average: "30%",
  },
  {
    employee: "Tomisin Ande",
    position: "Team Memeber",
    session: "2024 FY",
    status: "Approved",
    average: "30%",
  },
];

const Home = () => {
  const [sortConfig, setSortConfig] = useState({
    key: "employee",
    direction: "ascending",
  });

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
      const direction =
        prevConfig.key === key && prevConfig.direction === "ascending"
          ? "descending"
          : "ascending";
      return { key, direction };
    });
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort />;
    return sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <div className="pt-5 pb-10 space-y-4">
      <Welcome />
      <div className="grid grid-cols-2 gap-5">
        <DashboardCard />
        <div className="rounded-md w-full">
          <Tabs
            tabs={["1 month ago", "3 months ago", "6 months ago", "Date Range"]}
            size="100%"
          >
            <div className="transition-all duration-300 bg-white p-4 rounded-lg">
              {/* First content */}
            </div>

            <div className="transition-all duration-300 bg-white p-10 rounded-lg shadow-md">
              <div>
                <h2 className="font-bold text-3xl">Task History!</h2>
                <p className="text-gray-500 font-normal">
                  Here is a list of all your tasks, KPI or Appraisal
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full my-10">
                  <thead className="bg-gray-100">
                    <tr className="text-left text-xs font-medium text-gray-500 tracking-wider">
                      <th
                        onClick={() => handleSort("employee")}
                        className="cursor-pointer px-6 py-3 rounded-l-md"
                      >
                        <div className="flex items-center gap-2">
                          Employee {renderSortIcon("employee")}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("session")}
                        className="cursor-pointer px-6 py-3"
                      >
                        <div className="flex items-center gap-2">
                          Session {renderSortIcon("session")}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("status")}
                        className="cursor-pointer px-6 py-3"
                      >
                        <div className="flex items-center gap-2">
                          Status {renderSortIcon("status")}
                        </div>
                      </th>
                      <th
                        onClick={() => handleSort("average")}
                        className="cursor-pointer px-6 py-3 rounded-r-md"
                      >
                        <div className="flex items-center gap-2">
                          Average Score {renderSortIcon("average")}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedTasks.map((task, index) => {
                      const { employee, session, status, average, position } =
                        task;
                      return (
                        <tr key={index} className="text-sm text-gray-500">
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-2">
                              <span className="font-semibold">{employee}</span>
                              <span className="text-xs text-gray-400">
                                {position}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {session}
                          </td>
                          <td className="px-6 py-4 text-sm tracking-wide font-semibold">
                            <span
                              className={`${
                                (status === "Approved" &&
                                  "bg-green-200 text-green-700 px-4 py-2 rounded-lg") ||
                                (status === "Pending" &&
                                  "bg-yellow-200 text-yellow-700 px-4 py-2 rounded-lg") ||
                                (status === "Disputed" &&
                                  "bg-red-200 text-red-700 px-4 py-2 rounded-lg")
                              }`}
                            >
                              {status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {average}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
