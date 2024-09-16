import { AxiosResponse } from "axios";
import { Bill, ParseCSVResponse } from "shared";
import apiClient from "../base";

type BillPromise = Promise<AxiosResponse<ParseCSVResponse<Bill>>>;
export const getBills = (): BillPromise => apiClient.get("/bill");
