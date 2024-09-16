import { Request, Response } from "express";
import path from "path";
import { parseCSV } from "../utils/csvUtils";
import { ParseCSVStatus, Vote } from "shared";

const VOTES_PATH = path.join(__dirname, "../data/votes.csv");
const fetchVotes = (req: Request, res: Response) => {
  try {
    const result = parseCSV<Vote>(VOTES_PATH);
    if (result && result.status === ParseCSVStatus.SUCCESS) res.status(200).send(result);
    else res.status(500).send("Unknown error reading this file");
  } catch (error) {
    res.status(500).send("Error reading votes file");
  }
};

export default fetchVotes;
