import { Wrapper } from "../components/wrapper";
import { useEffect, useState } from "react";
import { PieChart } from "../components/pieChart";
import { Carousel } from "../components/carousel";

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

  const ItemOne = () => (
    <div className="flex flex-col items-center">
      Passengers Aboard The Titanic
      <PieChart passengers={data.passengers} />
    </div>
  );
  const ItemTwo = () => (
    <div className="flex flex-col items-center">
      Surving Passengers Aboard The Titanic
      <PieChart passengers={survivedData.passengers} />
    </div>
  );

  useEffect(() => {
    handleFetchPassengers();
    handleFetchSurvivingPassengers();
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-row">
        <Carousel items={[<ItemOne key={0} />, <ItemTwo key={1} />]} />
      </div>
    </Wrapper>
  );
}
