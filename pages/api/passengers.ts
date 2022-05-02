import { Passenger } from "./passenger";

const listOfPassengers: Passenger[] = [
  {
    sex: "female",
    ticketClass: "first",
    label: "Female First Class",
    number: 144,
  },
  {
    sex: "female",
    ticketClass: "second",
    label: "Female Second Class",
    number: 106,
  },
  {
    sex: "female",
    ticketClass: "third",
    label: "Female Third Class",
    number: 216,
  },
  {
    sex: "male",
    ticketClass: "first",
    label: "Male First Class",
    number: 179,
  },
  {
    sex: "male",
    ticketClass: "second",
    label: "Male Second Class",
    number: 171,
  },
  {
    sex: "male",
    ticketClass: "third",
    label: "Male Third Class",
    number: 493,
  },
];

export default function handler(req, res) {
  res.status(200).json({
    passengers:listOfPassengers,
  });
}
