import { Chart } from "chart.js/auto"
import { useEffect, useRef } from "react"

export const DashboardReports = () => {
    const chartRef1 = useRef(null);

    useEffect()
    return (
        <section className="flex gap-4 w-[50%]">
            {/* First report */}
            <div className="bg-white rounded-lg shadow-md h-[300px] p-4 flex-1 min-w-[300px]">
                <h2 className="text-lg font-semibold mb-4">Sales Report</h2>
                <div className="h-[calc(100%-2rem)]">
                    <canvas ref={chartRef1} id="firstReport"></canvas>
                </div>
            </div>

            {/* Second report */}
            <div className="bg-white rounded-lg shadow-md h-[300px] p-4 flex-1 min-w-[300px]">
                <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
                <div className="h-[calc(100%-2rem)]">
                    {/* Placeholder for second chart */}
                    <p className="text-gray-500">Chart coming soon</p>
                </div>
            </div>
        </section>
    )
}
