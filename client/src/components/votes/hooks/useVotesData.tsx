import { useEffect, useState } from "react";
import { ParseCSVStatus, Vote } from "shared";
import { getVotes } from "../../../api/routes/vote";

function useVotesData() {
  const [votes, setVotes] = useState<Vote[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchVotes = async () => {
      setIsLoading(true);
      try {
        const { data: responseData } = await getVotes();
        if (responseData.data && responseData.status === ParseCSVStatus.SUCCESS)
          setVotes(responseData.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVotes();
  }, []);

  return { votes, isLoading, error };
}

export default useVotesData;
