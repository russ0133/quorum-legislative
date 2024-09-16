import { useMemo } from "react";
import { Bill, Legislator, Vote, VoteResult } from "shared";
import {
  getBillSponsorName,
  getRelatedVoteResult,
  getVoteResult,
  getVoteYesNoCount,
} from "../utils/billTableUtils";
import { BillTableColumns } from "../../../global/tableHeaderOverrides";

type Props = {
  bills: Bill[];
  voteResults: VoteResult[];
  legislators: Legislator[];
  votes: Vote[];
};

function useBillsTable({ bills, voteResults, legislators, votes }: Props) {
  const rows = useMemo(() => {
    const _rows = bills.map((bill) => {
      const relatedVote = getRelatedVoteResult(votes, bill);
      const voteResult = getVoteResult(voteResults, relatedVote) || [];
      const sponsor = getBillSponsorName(legislators, bill) || "No sponsor";
      const voteCounts = getVoteYesNoCount(voteResult);

      return {
        ...bill,
        sponsor_id: sponsor,
        yay: voteCounts?.yes,
        nay: voteCounts?.no,
      };
    });
    return _rows;
  }, [legislators, bills, voteResults, votes]);

  const columns = useMemo(() => {
    if (bills && bills.length > 0) {
      const columnKeys = Object.keys(BillTableColumns) as Array<keyof typeof BillTableColumns>;
      return columnKeys.map((key) => ({
        key,
        label: BillTableColumns[key],
      }));
    }
    return [];
  }, [bills]);

  return { columns, rows };
}

export default useBillsTable;
