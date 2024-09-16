import { Request, Response } from "express";
import path from "path";
import { parseCSV } from "../utils/csvUtils";
import { Legislator, ParseCSVStatus } from "shared";

const LEGISLATORS_PATH = path.join(__dirname, "../data/legislators.csv");
const fetchLegislators = (req: Request, res: Response) => {
  try {
    const result = parseCSV<Legislator>(LEGISLATORS_PATH);
    if (result && result.status === ParseCSVStatus.SUCCESS) res.status(200).send(result);
    else res.status(200).send("Unknown error reading this file");
  } catch (error) {
    res.status(500).send("Error reading legislators file");
  }
};

export default fetchLegislators;
