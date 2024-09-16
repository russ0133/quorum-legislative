export interface Bill {
  id: number;
  title: string;
  sponsor_id: number;
}
export interface Legislator {
  id: number;
  name: string;
}
export interface Vote {
  id: number;
  bill_id: number;
}
export declare enum VoteType {
  YES = 1,
  NO = 2,
}
export interface VoteResult {
  id: number;
  legislator_id: number;
  vote_id: number;
  vote_type: VoteType;
}
export type Test = {
  name: string;
};
export declare enum ParseCSVStatus {
  SUCCESS = "success",
  ERROR = "error",
}
export type ParseCSVResponse<T = any> = {
  status: ParseCSVStatus;
  data: T[] | null;
  errors: any;
};
