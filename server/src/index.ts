// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fetchBills from "./routes/Bill";
import fetchLegislators from "./routes/Legislator";
import fetchVoteResults from "./routes/VoteResult";
import fetchVotes from "./routes/Vote";

dotenv.config();

export const app: Express = express();
const port = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Server");
});

app.get("/bill", fetchBills);
app.get("/legislator", fetchLegislators);
app.get("/vote", fetchVotes);
app.get("/voteResult", fetchVoteResults);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
