"use client";
import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

export const DashboardReports = () => {
  const chartRef1 = useRef(null);
  const chartInstance = useRef(null);

  // First chart
  const firstChartLabel = ["Staffs", "Students", "Course"];

  useEffect(() => {
    if (!chartRef1.current) return;

    const ctx = chartRef1.current.getContext("2d");
    if (!ctx) return;

    // Clear any previous chart
    const existingChart = Chart.getChart(chartRef1.current);
    if (existingChart) {
      existingChart.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: firstChartLabel,
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#6f3bff", "#ff584c", "#0f52ff"],
            borderAlign: "center",
            borderColor: "transparent",
            weight: 0.25,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        plugins: {
          legend: {
            position: "right",
            labels: {
              boxWidth: 10,
              padding: 10,
              usePointStyle: true,
              pointStyle: 'circle',
              font: {
                size: 12, // Font size of legend text
              },
            },
          },
        },
      },
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="flex gap-4">
      {/* First report */}
      <div className="bg-white rounded-lg shadow-md h-[300px] p-4 flex-1 min-w-[300px]">
        <h2 className="text-lg font-semibold mb-4">Sales Report</h2>
        <div className="h-[calc(100%-2rem)] w-full">
          <canvas ref={chartRef1} id="chart1" height="300" width="400"></canvas>
        </div>
      </div>

      {/* Second report */}
      <div className="bg-white rounded-lg shadow-md h-[300px] p-4 flex-1 min-w-[300px]">
        <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
        <div className="h-[calc(100%-2rem)]">
          <p className="text-gray-500">Chart coming soon</p>
        </div>
      </div>
    </section>
  );
};
