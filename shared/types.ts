export interface Bill {
  id: number;
  title: string;
  primarySponsor: number;
}

export interface Legislator {
  id: number;
  name: string;
}

export interface Vote {
  id: number;
  billID: number;
}

export enum VoteType {
  YES = 1,
  NO = 2,
}

export interface VoteResult {
  id: number;
  legislatorID: number;
  voteID: number;
  voteType: VoteType;
}
