// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    sex: {
      female: { class: { first: 144, second: 106, third: 216 } },
      male: { class: { first: 179, second: 171, third: 493 } },
    },
  });
}
