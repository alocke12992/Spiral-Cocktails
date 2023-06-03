'use client'
import dynamic from "next/dynamic";
import { Pie, Cell, ResponsiveContainer } from "recharts";
import { IChartData } from "../types";

// Recharts throws errors when rendered on the server
// https://stackoverflow.com/questions/72311188/hydration-failed-error-using-recharts-with-nextjs
const PieChart = dynamic(() => import("recharts").then(recharts => recharts.PieChart), { ssr: false });

interface IChartProps {
  chartData: IChartData[]
}
const Chart: React.FC<IChartProps> = ({ chartData }) => {
  if (!chartData) return null

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          dataKey="value"
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={50}
          stroke="none"
        >
          {
            chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Chart
