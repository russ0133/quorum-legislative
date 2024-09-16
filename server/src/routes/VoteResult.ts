import { Request, Response } from "express";
import path from "path";
import { parseCSV } from "../utils/csvUtils";
import { ParseCSVStatus, VoteResult } from "shared";

const VOTE_RESULTS_PATH = path.join(__dirname, "../data/voteResults.csv");
const fetchVoteResults = (req: Request, res: Response) => {
  try {
    const result = parseCSV<VoteResult>(VOTE_RESULTS_PATH);
    if (result && result.status === ParseCSVStatus.SUCCESS) res.status(200).send(result);
    else res.status(500).send("Unknown error reading this file");
  } catch (error) {
    res.status(500).send("Error reading vote results file");
  }
};

export default fetchVoteResults;
