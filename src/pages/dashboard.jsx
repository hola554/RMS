import { Card } from "../components/card";

const DashboardPage = () => {
  return (
    <>
      <main className="px-3 bg-red-400 w-full">
        <section className="flex gap-2 w-full">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
};

export default DashboardPage;
