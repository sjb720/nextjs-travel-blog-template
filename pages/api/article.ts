// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const file = fs.readFileSync('./articles/7.2.2024.md');
  res.status(200).json(file.toString());
}
