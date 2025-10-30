import { toast } from "react-toastify";
import type { QueryParams } from "./convert-json-to-query-string";

export interface GetUsersParams extends QueryParams {
  page?: number;
  limit?: number;
  search?: string;
}

export const handleMutationToast = async (queryFulfilled: Promise<any>) => {
  try {
    await queryFulfilled;
    toast.success("");
  } catch {
    toast.error("");
  }
};
