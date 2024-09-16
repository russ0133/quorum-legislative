import { useEffect, useState } from "react";
import { ParseCSVStatus, VoteResult } from "shared";
import { getVoteResults } from "../../../api/routes/voteResult";

function useVoteResultsData() {
  const [voteResults, setVoteResults] = useState<VoteResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchVoteResults = async () => {
      setIsLoading(true);
      try {
        const { data: responseData } = await getVoteResults();

        console.log(responseData);
        if (responseData.data && responseData.status === ParseCSVStatus.SUCCESS)
          setVoteResults(responseData.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVoteResults();
  }, []);

  return { voteResults, isLoading, error };
}

export default useVoteResultsData;
