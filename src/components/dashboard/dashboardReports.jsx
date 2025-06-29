"use client";
import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

const DoughnutChart = ({ labels, data, backgroundColors }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Ensure the canvas element exists
    if (!chartRef.current) return;

    // Get the 2D rendering context
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Destroy any existing chart instance to prevent memory leaks and re-rendering issues
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new Chart.js instance
    chartInstance.current = new Chart(ctx, {
      type: "doughnut", // Chart type is doughnut
      data: {
        labels: labels, // Labels for the segments
        datasets: [
          {
            data: data, // Data values for each segment
            backgroundColor: backgroundColors, // Background colors for each segment
            borderAlign: "center", // Align borders to the center of the arc
            borderColor: "transparent", // Transparent border for a cleaner look
            weight: 0.25, // Weight of the dataset
            hoverOffset: 4, // Offset when hovering over a segment
          },
        ],
      },
      options: {
        responsive: true, // Make the chart responsive to container size
        maintainAspectRatio: false, // Do not maintain aspect ratio, allowing flexible sizing
        cutout: "70%", // Size of the inner cutout (doughnut hole)
        animation: {
          animateScale: true, // Animate the scale of the chart on load
          animateRotate: true, // Animate the rotation of the chart on load
        },
        plugins: {
          legend: {
            position: "right", // Position the legend on the right side
            labels: {
              boxWidth: 10, // Width of the color box in the legend
              padding: 10, // Padding between legend items
              usePointStyle: true, // Use point style (circle) for legend items
              pointStyle: "circle", // Set the point style to circle
              font: {
                size: 12, // Font size for legend labels
              },
            },
          },
        },
      },
    });

    // Cleanup function: destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [labels, data, backgroundColors]); // Re-run effect if these props change

  return (
    <div className="h-full w-full flex items-center justify-center">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export const DashboardReports = () => {
 
  const firstChartLabel = ["Staffs", "Students", "Course"];
  const firstChartData = [300, 50, 100];
  const firstChartColors = ["#6f3bff", "#ff584c", "#0f52ff"];

  const secondChartLabel = ["Staffs", "Students", "Course"];
  const secondChartData = [300, 0, 0];
  const secondChartColors = ["#6f3bff", "#ff584c", "#0f52ff"];
  return (
    <section className="flex gap-4">
      {/* First report */}
      <div className="bg-white rounded-lg shadow-md h-[300px] p-4 flex-1 min-w-[300px]">
        <h2 className="text-lg font-semibold mb-4">Sales Report</h2>
        <div className="h-[calc(100%-2rem)] w-full">
          <DoughnutChart
            labels={firstChartLabel}
            data={firstChartData}
            backgroundColors={firstChartColors}
          />
        </div>
      </div>

      {/* Second report */}
      <div className="bg-white rounded-lg shadow-md h-[300px] p-4 flex-1 min-w-[300px]">
        <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
        <div className="h-[calc(100%-2rem)]">
          <DoughnutChart
            labels={secondChartLabel}
            data={secondChartData}
            backgroundColors={secondChartColors}
          />
        </div>
      </div>
    </section>
  );
};
