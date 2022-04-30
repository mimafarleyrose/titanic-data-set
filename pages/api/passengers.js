// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    passengers: [
      { label: "Female First Class", number: 144 },
      { label: "Female Second Class", number: 106 },
      { label: "Female Third Class", number: 216 },
      { label: "Male First Class", number: 179 },
      { label: "Male Second Class", number: 171 },
      { label: "Male Third Class", number: 493 },
    ],
  });
}
