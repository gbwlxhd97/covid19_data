import { promises as fs } from 'fs';
import { IgenAgeCaseInf } from '@src/interfaces/covid19';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
export default async function getGenAgeCase(
  req: NextApiRequest,
  res: NextApiResponse<IgenAgeCaseInf>
) {
  const jsonDirectory = path.join(process.cwd(), 'src/model/json');
  const file = await fs.readFile(
    jsonDirectory + '/covid19genAgeCase.json',
    'utf8'
  );
  res.status(200).json(JSON.parse(file));
}
