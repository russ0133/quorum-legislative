import { useMemo } from "react";
import { Bill, Legislator, VoteResult } from "shared";
import { LegislatorTablesColumnsOverrides } from "../../../global/tableHeaderOverrides";
import { getLegislatorVoteCount } from "../utils/legislatorTableUtils";

type Props = {
  bills: Bill[];
  voteResults: VoteResult[];
  legislators: Legislator[];
};

function useLegislatorsTable({ bills, voteResults, legislators }: Props) {
  const rows = useMemo(() => {
    const _rows = legislators.map((legislator) => {
      const { supported, opposed } = getLegislatorVoteCount(legislator, voteResults);
      return {
        ...legislator,
        supported,
        opposed,
      };
    });
    return _rows;
  }, [legislators, voteResults]);

  const columns = useMemo(() => {
    if (bills && bills.length > 0) {
      const columnKeys = Object.keys(LegislatorTablesColumnsOverrides) as Array<
        keyof typeof LegislatorTablesColumnsOverrides
      >;
      return columnKeys.map((key) => ({
        key,
        label: LegislatorTablesColumnsOverrides[key],
      }));
    }
    return [];
  }, [bills]);

  console.log("COLUMNS ARE", columns);
  return { columns, rows };
}

export default useLegislatorsTable;
