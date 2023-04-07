import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('reqheaders',req.headers.authorization);

  await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: req.headers.authorization!,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.json(data);
    });
}
