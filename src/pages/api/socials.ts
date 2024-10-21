// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { socials } from "./data/socials";

type Data = Socials[]

interface Socials {
  id: number,
  icon: string,
  path: string
}

export default function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if(req.method === 'GET') {
    res.status(200).json(socials);
  }
}
