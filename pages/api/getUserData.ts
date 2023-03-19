import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('_req');
  _req.get
  
}
