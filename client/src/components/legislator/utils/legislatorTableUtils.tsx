import { Legislator, VoteResult, VoteType } from "shared";

export function getLegislatorVoteCount(legislator: Legislator, voteResults: VoteResult[]) {
  const votes = voteResults.filter((vote) => vote.legislator_id === legislator.id);
  const supported = votes.filter((vote) => vote.vote_type === VoteType.YES).length;
  const opposed = votes.filter((vote) => vote.vote_type === VoteType.NO).length;
  return { supported, opposed };
}

export const renderLegislatorCell = (
  legislator: Legislator,
  column: { key: string; label: string }
) => {
  const value = legislator[column.key as keyof Legislator];
  if (column.key === "opposed" || column.key === "supported") {
    return `${value} bill${typeof value === "number" && value > 1 ? "s" : ""}`;
  }
  return value;
};
