'use client'
import dynamic from "next/dynamic";
import { Pie, Cell, ResponsiveContainer } from "recharts";
import { IChartData } from "@/types";
import styled from "styled-components";

// Recharts throws errors when rendered on the server
// https://stackoverflow.com/questions/72311188/hydration-failed-error-using-recharts-with-nextjs
const PieChart = dynamic(() => import("recharts").then(recharts => recharts.PieChart), { ssr: false });

interface IChartProps {
  chartData: IChartData[]
}
const Chart: React.FC<IChartProps> = ({ chartData }) => {
  if (!chartData) return null

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={chartData}
            outerRadius={60}
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
    </Container>
  )
}

export default Chart

const Container = styled.div`
  height: 120px;
  width: 120px;
`