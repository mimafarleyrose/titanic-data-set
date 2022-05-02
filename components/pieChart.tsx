import ReactECharts from "echarts-for-react";
import { Passenger } from "../pages/api/passenger";
import { useIsDarkMode } from "../utils/useIsDarkMode";

const labelConfig = {
  normal: {
    show: true,
    borderColor: "#333",
    padding: 10,
    color: "white",
    fontSize: 14,
    shadowBlur: 3,
    shadowColor: "#888",
    shadowOffsetX: 0,
    shadowOffsetY: 3,
    lineHeight: 30,
  },
};

interface PieChartProps {
  passengers?: Passenger[];
  title: string;
}

export const PieChart = ({ passengers = [], title }: PieChartProps) => {
  const darkMode = useIsDarkMode();

  const getData = () => {
    return passengers.map((passenger) => ({
      value: passenger.number,
      name: passenger.label,
      label: {
        normal: {
          show: true,
          borderColor: "#333",
          padding: 10,
          color: darkMode ? "#F49AC7" : "#facde3",
          fontSize: 14,
          shadowBlur: 3,
          shadowColor: "#888",
          shadowOffsetX: 0,
          shadowOffsetY: 3,
          lineHeight: 30,
        },
      },
    }));
  };

  return (
    <div className="flex flex-col items-center">
      {title}
      <ReactECharts
        style={{
          height: "40vh",
          width: "40vw",
        }}
        option={{
          color: [
            "#7effd3",
            "#7eebff",
            "#7eaaff",
            "#927eff",
            "#d37eff",
            "#ff7eeb",
          ],
          tooltip: {
            trigger: "item",
            formatter: (params) => {
              return `${params.name}: ${params.data.value} people (${params.percent}%)`;
            },
          },
          series: [
            {
              type: "pie",
              data: getData(),
            },
          ],
        }}
      />
    </div>
  );
};
