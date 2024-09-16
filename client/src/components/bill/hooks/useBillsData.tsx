import { useEffect, useState } from "react";
import { Bill, ParseCSVStatus } from "shared";
import { getBills } from "../../../api/routes/bill";

function useBillsData() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBills = async () => {
      setIsLoading(true);
      try {
        const { data: responseData } = await getBills();
        if (responseData.data && responseData.status === ParseCSVStatus.SUCCESS)
          setBills(responseData.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBills();
  }, []);

  return { bills, isLoading, error };
}

export default useBillsData;
