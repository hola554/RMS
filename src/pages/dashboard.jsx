import { Card } from "../components/card";

const DashboardPage = () => {
  return (
    <>
      <main className="px-3 w-full">
        {/* card section */}
        <section className="flex gap-2 w-full">
          <Card title="registered students"
            stat="300"
            bgColor="#7542ff" />
          <Card title="total staffs"
            stat="38"
            bgColor="#31A093" />
          <Card title="results submitted"
            stat="285"
            bgColor="#FE9A62" />
          <Card title="pending registration"
            stat="50"
            bgColor="#7CBE3B" />
        </section>
      </main>
    </>
  );
};

export default DashboardPage;
