import { AxiosResponse } from "axios";
import { ParseCSVResponse, Vote } from "shared";
import apiClient from "../base";

type VotePromise = Promise<AxiosResponse<ParseCSVResponse<Vote>>>;
export const getVotes = (): VotePromise => apiClient.get("/vote");
