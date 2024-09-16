import Papa from "papaparse";
import fs from "fs";
import { ParseCSVResponse, ParseCSVStatus } from "shared";

export function parseCSV<T = any>(file_path: string): ParseCSVResponse<T> | undefined {
  try {
    const fileContent = fs.readFileSync(file_path, "utf8");
    let response: ParseCSVResponse = {
      status: ParseCSVStatus.SUCCESS,
      data: null,
      errors: null,
    };

    Papa.parse(fileContent, {
      header: true,
      complete: (results) => {
        if (results.errors.length > 0) console.error("CSV parsing errors:", results.errors);
        response = {
          status: ParseCSVStatus.SUCCESS,
          data: results.data,
          errors: results.errors,
        };
      },

      error: (error: unknown) => {
        console.error("CSV parsing error:", error);
        return { status: ParseCSVStatus.ERROR, data: null, errors: error } as ParseCSVResponse;
      },
    }) as unknown as ParseCSVResponse;
    if (response.status && response.data) return response;
    else return undefined;
  } catch (error) {
    console.error("File reading error:", error);
    return { status: ParseCSVStatus.ERROR, data: null, errors: [error] };
  }
}
