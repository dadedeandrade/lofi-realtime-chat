import { NextApiResponse, NextApiRequest } from "next";

export default async function (req, res, ctx) {
    console.log(res);
    
  return res.json({test: ctx});
}
