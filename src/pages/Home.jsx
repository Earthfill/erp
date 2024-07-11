import { DashboardCard, PerformanceChart, TaskHistory, Welcome } from "../components";

const Home = () => {
  return (
    <div className="pt-5 pb-10 space-y-4">
      <Welcome />
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <DashboardCard />
          <PerformanceChart />
        </div>
        <TaskHistory />
      </div>
    </div>
  );
};

export default Home;
