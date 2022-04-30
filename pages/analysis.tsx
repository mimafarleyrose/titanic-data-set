import { Wrapper } from "../components/wrapper";
import Octopus from "../styles/octopus.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
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
export default function Analysis() {
  const [data, setData] = useState<any>({});

  const handleFetchPosts = async () => {
    const response = await fetch("/api/analysis");
    const analysisData = await response.json();
    setData(analysisData);
  };

  useEffect(() => {
    handleFetchPosts();
  }, []);

  return (
    <Wrapper>
      <Link href="/" passHref>
        <Octopus className="cursor-pointer" />
      </Link>
      <div>
        <ReactECharts
          style={{
            height: "50vh",
            width: "50vw",
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
                console.log(params);
                return `${params.name}: ${params.data.value} people (${params.percent}%)`;
              },
            },
            series: [
              {
                type: "pie",
                data: [
                  {
                    value: data?.sex?.female?.class?.first | 0,
                    name: "Female First Class",
                    label: labelConfig,
                  },
                  {
                    value: data?.sex?.female?.class?.second | 0,
                    name: "Female Second Class",
                    label: labelConfig,
                  },
                  {
                    value: data?.sex?.female?.class?.third | 0,
                    name: "Female Third Class",
                    label: labelConfig,
                  },
                  {
                    value: data?.sex?.male?.class?.first | 0,
                    name: "Male First Class",
                    label: labelConfig,
                  },
                  {
                    value: data?.sex?.male?.class?.second | 0,
                    name: "Male Second Class",
                    label: labelConfig,
                  },
                  {
                    value: data?.sex?.male?.class?.third | 0,
                    name: "Male Third Class",
                    label: labelConfig,
                  },
                ],
                roseType: "area",
              },
            ],
          }}
        />
      </div>
    </Wrapper>
  );
}
