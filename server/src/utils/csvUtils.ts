import Papa from "papaparse";
import fs from "fs";
import { ParseCSVResponse, ParseCSVStatus } from "shared";

function filterEmptyValues<T = any>(data: T[]): T[] {
  return data.filter((item) => {
    return Object.values(item as any).some((value: any) => value !== "" && value !== undefined);
  });
}

export function parseCSV<T = any>(
  file_path: string,
  filter_empty: boolean = true
): ParseCSVResponse<T> | undefined {
  try {
    const fileContent = fs.readFileSync(file_path, "utf8");
    let response: ParseCSVResponse = {
      status: ParseCSVStatus.ERROR,
      data: null,
      errors: null,
    };

    Papa.parse(fileContent, {
      header: true,
      complete: (results) => {
        if (results.errors.length > 0) console.error("CSV parsing errors:", results.errors);
        const data = filter_empty ? filterEmptyValues(results.data) : results.data;

        response = {
          status: ParseCSVStatus.SUCCESS,
          data,
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
    return { status: ParseCSVStatus.ERROR, data: null, errors: [error as Papa.ParseError] };
  }
}
