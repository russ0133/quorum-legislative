import { Bill, Legislator, Vote, VoteResult } from "shared";

export type Keys<T> = {
  [key in keyof T]: string;
};

export const BillsTableColumnsOverrides: Keys<Bill & { yay: number; nay: number }> = {
  id: "ID",
  title: "Title",
  sponsor_id: "Primary Sponsor",
  yay: "Positive Votes",
  nay: "Negative Votes",
};

export const LegislatorTablesColumnsOverrides: Keys<
  Legislator & { supported: number; opposed: number }
> = {
  id: "ID",
  name: "Name",
  supported: "Supported",
  opposed: "Opposed",
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
