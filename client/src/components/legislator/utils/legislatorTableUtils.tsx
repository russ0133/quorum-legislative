import { Bill, Legislator, Vote, VoteResult, VoteType } from "shared";

export function getLegislatorVoteCount(legislator: Legislator, voteResults: VoteResult[]) {
  const votes = voteResults.filter((vote) => vote.legislator_id === legislator.id);
  const supported = votes.filter((vote) => vote.vote_type === VoteType.YES).length;
  const opposed = votes.filter((vote) => vote.vote_type === VoteType.NO).length;
  return { supported, opposed };
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
