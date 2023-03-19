import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('reqqeuerycode ', _req.query.code);
  console.log('env ', process.env.CLIENT_SECRET, process.env.CLIENT_ID);

  const params =
    "?client_id=" +
    process.env.CLIENT_ID +
    "&client_secret=" +
    process.env.CLIENT_SECRET +
    "&code=" +
    _req.query.code;

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
      console.log('accessToken ', data)
      res.json(data);
    });
}
