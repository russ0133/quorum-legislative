import { Bill, Legislator, Vote, VoteResult, VoteType } from "shared";

export function getBillSponsorName(legislators: Legislator[], bill: Bill) {
  const sponsor = legislators.find((legislator) => legislator.id === bill.sponsor_id);
  return sponsor?.name;
}

export function getRelatedVoteResult(votes: Vote[], bill: Bill) {
  const voteResult = votes.find((vote) => vote.bill_id === bill.id);
  return voteResult;
}

export function getVoteResult(voteResults: VoteResult[], vote?: Vote) {
  if (!vote) return null;
  const voteResult = voteResults.filter((voteResult) => voteResult.vote_id === vote.id);
  return voteResult;
}

export function getVoteYesNoCount(voteResults: VoteResult[]) {
  if (!voteResults) return null;
  const yes = voteResults.filter((voteResult) => voteResult.vote_type === VoteType.NO).length;
  const no = voteResults.filter((voteResult) => voteResult.vote_type === VoteType.YES).length;
  return { yes, no };
}
