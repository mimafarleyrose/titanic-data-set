import ReactECharts from "echarts-for-react";

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

interface Passenger {
  label: string;
  number: number;
}

interface PieChartProps {
  passengers?: Passenger[];
}

export const PieChart = ({ passengers }: PieChartProps) => {
  const getData = () => {
    return passengers?.map((passenger) => ({
      value: passenger.number,
      name: passenger.label,
      label: labelConfig,
    }));
  };

  return (
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
  );
};
