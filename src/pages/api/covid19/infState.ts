import type { NextApiRequest, NextApiResponse } from 'next';
import {promises as fs} from "fs";


import path from 'path';
import { IinfState } from '@src/interfaces/covid19';
export default async function getInfState(
  req: NextApiRequest,
  res: NextApiResponse<IinfState>
) {
  const jsonDirectory = path.join(process.cwd(), 'src/model/json');
  const file = await fs.readFile(jsonDirectory + '/covid19InfState.json','utf8');
  res.status(200).json(JSON.parse(file));
}
