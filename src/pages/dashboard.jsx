import { DashboardCards } from "../components/dashboard/dashboardCards";
import { DashboardReports } from "../components/dashboard/dashboardReports";

const DashboardPage = () => {
  return (
    <>
      <main className="px-3 w-full">
        {/* card section */}
        <DashboardCards />
        {/* Middle Section */}
        <section className="mt-5 flex">
          <DashboardReports />
        </section>
      </main>
    </>
  );
};

export default DashboardPage;
