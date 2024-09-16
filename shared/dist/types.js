"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseCSVStatus = exports.VoteType = void 0;
var VoteType;
(function (VoteType) {
    VoteType[VoteType["YES"] = 1] = "YES";
    VoteType[VoteType["NO"] = 2] = "NO";
})(VoteType || (exports.VoteType = VoteType = {}));
var ParseCSVStatus;
(function (ParseCSVStatus) {
    ParseCSVStatus["SUCCESS"] = "success";
    ParseCSVStatus["ERROR"] = "error";
})(ParseCSVStatus || (exports.ParseCSVStatus = ParseCSVStatus = {}));
