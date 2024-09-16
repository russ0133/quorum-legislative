import { Bill, Legislator, Vote, VoteResult } from "shared";

export type Keys<T> = {
  [key in keyof T]: string;
};

export const BillTableColumns: { [key in keyof (Bill & { yay: number; nay: number })]: string } = {
  id: "ID",
  title: "Title",
  sponsor_id: "Primary Sponsor",
  yay: "Positive Votes",
  nay: "Negative Votes",
};

export const LegislatorOverrides: Keys<Legislator> = {
  id: "ID",
  name: "Name",
};

export const VoteOverrides: Keys<Vote> = {
  id: "ID",
  bill_id: "Bill ID",
};

export const VoteResultOverrides: Keys<VoteResult> = {
  id: "ID",
  legislator_id: "Legislator ID",
  vote_id: "Vote ID",
  vote_type: "Vote Type",
};
