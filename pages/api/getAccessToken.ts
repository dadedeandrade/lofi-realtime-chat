import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const params = `?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}&code=${_req.query.code}`;

  await fetch("https://github.com/login/oauth/access_token" + params, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.json(data);
    });
}
