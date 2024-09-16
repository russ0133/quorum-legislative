import { AxiosResponse } from "axios";
import { ParseCSVResponse, VoteResult } from "shared";
import apiClient from "../base";

type VoteResultPromise = Promise<AxiosResponse<ParseCSVResponse<VoteResult>>>;
export const getVoteResults = (): VoteResultPromise => apiClient.get("/voteresult");
