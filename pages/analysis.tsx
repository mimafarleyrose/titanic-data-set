import { Wrapper } from "../components/wrapper";
import { useEffect, useState } from "react";
import { PieChart } from "../components/pieChart";
import { Carousel } from "../components/carousel";
import { PassengerExperience } from "../components/passengerExperience";
import { Passenger } from "./api/passenger";
import { handleFetchData } from "../utils/fetchData";

interface PassengerData {
  passengers?: Passenger[];
}
export default function Analysis() {
  const [passengerData, setPassengerData] = useState<PassengerData>({});
  const [survivingPassengersData, setSurvivingPassengersData] =
    useState<PassengerData>({});

  useEffect(() => {
    handleFetchData("/api/passengers", setPassengerData);
    handleFetchData("/api/survived", setSurvivingPassengersData);
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-row">
        <Carousel
          items={[
            <PieChart
              key={0}
              passengers={passengerData.passengers}
              title={"Passengers Aboard The Titanic"}
            />,
            <PieChart
              key={1}
              passengers={survivingPassengersData.passengers}
              title={"Passengers Who Survived The Titanic"}
            />,
            <PassengerExperience
              key={2}
              passengers={passengerData.passengers}
              survivingPassengers={survivingPassengersData}
            />,
          ]}
        />
      </div>
    </Wrapper>
  );
}
