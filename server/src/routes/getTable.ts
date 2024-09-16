import { Request, Response } from "express";
import { app } from "..";

const getTable = (req: Request<any>, res: Response) => {
  console.log(req.body);
  res.send("Express + TypeScript Server");
};

export default getTable;
