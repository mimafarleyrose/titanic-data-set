export default function handler(req, res) {
  res.status(200).json({
    passengers: [
      { label: "Female First Class", number: 139 },
      { label: "Female Second Class", number: 94 },
      { label: "Female Third Class", number: 106 },
      { label: "Male First Class", number: 61 },
      { label: "Male Second Class", number: 25 },
      { label: "Male Third Class", number: 75 },
    ],
  });
}
