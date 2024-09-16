import { useEffect, useState } from "react";
import { Legislator, ParseCSVStatus } from "shared";
import { getLegislators } from "../../../api/routes/legislator";

function useLegislatorsData() {
  const [legislators, setLegislators] = useState<Legislator[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchVotes = async () => {
      setIsLoading(true);
      try {
        const { data: responseData } = await getLegislators();
        if (responseData.data && responseData.status === ParseCSVStatus.SUCCESS)
          setLegislators(responseData.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVotes();
  }, []);

  return { legislators, isLoading, error };
}

export default useLegislatorsData;
