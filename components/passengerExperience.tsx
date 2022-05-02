import { useState } from "react";
import Sex from "../styles/svgs/sex.svg";
import Ticket from "../styles/svgs/ticket.svg";

interface PassengerExperience {
  passengers: any;
  survivingPassengers: any;
}

export const PassengerExperience = ({
  passengers,
  survivingPassengers,
}: PassengerExperience) => {
  const [selectedSex, setSelectedSex] = useState<string>();
  const [selectedTicketClass, setSelectedTicketClass] = useState<string>();

  const buttons = (
    buttonList: string[],
    onClick: (selection: string) => void,
    selection: string
  ) => {
    return (
      <div className="flex flex-row justify-center">
        {buttonList.map((button, i) => (
          <button
            onClick={() => onClick(button)}
            key={i}
            className={`${
              selection === button ? "border border-dark" : ""
            } rounded-sm w-28 mr-2 p-4`}
          >
            {button}
          </button>
        ))}
      </div>
    );
  };

  const selectedPassengerCount = passengers?.passengers?.find((item) => {
    return (
      item.sex === selectedSex?.toLowerCase() &&
      item.ticketClass === selectedTicketClass?.toLowerCase()
    );
  })?.number;

  const survivingPassengerCount = survivingPassengers?.passengers?.find(
    (item) => {
      return (
        item.sex === selectedSex?.toLowerCase() &&
        item.ticketClass === selectedTicketClass?.toLowerCase()
      );
    }
  )?.number;

  const chanceOfSurvival = (
    (survivingPassengerCount / selectedPassengerCount) *
    100
  ).toFixed();

  return (
    <div className="flex flex-col w-item h-item">
      <div>Choose your ticket class and sex</div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col items-center">
          <Sex className="w-24 h-24" />
          {buttons(["Male", "Female"], setSelectedSex, selectedSex)}
        </div>
        <div className="flex flex-col items-center">
          <Ticket className="w-24 h-24" />
          {buttons(
            ["First", "Second", "Third"],
            setSelectedTicketClass,
            selectedTicketClass
          )}
        </div>
      </div>
      <button>See their experience</button>
      {selectedTicketClass && selectedSex && (
        <>
          <div>
            There were {selectedPassengerCount} {selectedTicketClass} class{" "}
            {selectedSex} passengers aboard the Titanic
          </div>
          <div>After the sinking {survivingPassengerCount} survived</div>
          <div>
            Meaning they would have had a {chanceOfSurvival}% chance of survival
          </div>
        </>
      )}
    </div>
  );
};
