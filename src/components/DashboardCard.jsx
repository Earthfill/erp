import { FaScroll } from "react-icons/fa";
import { MdScoreboard } from "react-icons/md";
import Tabs from "./Tabs";

const DashboardCard = () => {
  return (
    <div className="rounded-md w-full">
      <Tabs tabs={["My Dashboard", "My Teams Dashboard"]} size="25.5rem">
        <div className="transition-all duration-300 bg-white p-4 rounded-lg">
          {/* First content */}
        </div>

        <div className="transition-all duration-300 p-4 rounded-2xl bg-blue-900 w-full">
          <div className="grid grid-cols-2 gap-7 p-5">
            <div className="flex flex-col gap-3 text-base-100 border-r border-r-gray-500">
              <span className="rounded-full bg-gray-400 w-fit p-2 text-base-100 opacity-65">
                <FaScroll size={40} />
              </span>
              <p className="font-light text-gray-300">
                Highest Overall Team Score
              </p>
              <p className="text-3xl">99%</p>
            </div>
            <div className="flex flex-col gap-3 text-base-100">
              <span className="rounded-full bg-gray-400 w-fit p-2 text-base-100 opacity-65">
                <MdScoreboard size={40} />
              </span>
              <p className="font-light text-gray-300">
                Highest Appraisal Scorer
              </p>
              <p className="text-3xl">Umar T.</p>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default DashboardCard;
