import { Request, Response } from "express";
import path from "path";
import { parseCSV } from "../utils/csvUtils";
import { Bill, ParseCSVStatus } from "shared";

const BILLS_PATH = path.join(__dirname, "../data/bills.csv");
const fetchBills = (req: Request, res: Response) => {
  try {
    const result = parseCSV<Bill>(BILLS_PATH);
    if (result && result.status === ParseCSVStatus.SUCCESS) res.status(200).send(result);
    else res.status(200).send("Unknown error reading this file");
  } catch (error) {
    res.status(500).send("Error reading bills file");
  }
};

export default fetchBills;
