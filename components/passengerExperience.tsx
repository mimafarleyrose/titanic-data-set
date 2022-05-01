import { useState } from "react";
import Sex from "../styles/sex.svg";
import Ticket from "../styles/ticket.svg";

export const PassengerExperience = () => {
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
      </div>{" "}
      {selectedTicketClass && selectedSex && (
        <>
          <button>See their experience</button>
          <div>{selectedTicketClass}</div>
          <div>{selectedSex}</div>
        </>
      )}
    </div>
  );
};
