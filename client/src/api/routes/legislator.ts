import { AxiosResponse } from "axios";
import { Legislator, ParseCSVResponse } from "shared";
import apiClient from "../base";

type LegislatorPromise = Promise<AxiosResponse<ParseCSVResponse<Legislator>>>;
export const getLegislators = (): LegislatorPromise => apiClient.get("/legislator");
