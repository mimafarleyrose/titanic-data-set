import { Wrapper } from "../components/wrapper";
import Octopus from "../styles/octopus.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PieChart } from "../components/pieChart";

export default function Analysis() {
  const [data, setData] = useState<any>({});
  const [survivedData, setSurvivedData] = useState<any>({});

  const handleFetchPassengers = async () => {
    const response = await fetch("/api/passengers");
    const analysisData = await response.json();
    setData(analysisData);
  };

  const handleFetchSurvivingPassengers = async () => {
    const response = await fetch("/api/survived");
    const analysisData = await response.json();
    setSurvivedData(analysisData);
  };

  useEffect(() => {
    handleFetchPassengers();
    handleFetchSurvivingPassengers();
  }, []);

  return (
    <Wrapper>
      <Link href="/" passHref>
        <Octopus className="cursor-pointer" />
      </Link>
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
          Passengers Aboard The Titanic
          <PieChart passengers={data.passengers} />
        </div>
        <div className="flex flex-col items-center">
          Surving Passengers Aboard The Titanic
          <PieChart passengers={survivedData.passengers} />
        </div>
      </div>
    </Wrapper>
  );
}
