import { DashboardCards } from "../components/dashboard/dashboardCards";
import { DashboardPerfomance } from "../components/dashboard/dashboardPerfomance";
import { DashboardReports } from "../components/dashboard/dashboardReports";

const DashboardPage = () => {
  return (
    <>
      <main className="px-3 w-full">
        {/* card section */}
        <DashboardCards />
        {/* Middle Section */}
        <section className="mt-5 flex gap-4">
          <DashboardReports />
          <DashboardPerfomance />
        </section>
      </main>
    </>
  );
};

export default DashboardPage;
