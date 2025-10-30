import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import convertJSONToQueryString from "../../utils/convert-json-to-query-string";
import type { QueryParams } from "../../utils/convert-json-to-query-string";
import { handleMutationToast } from "../../utils/handle-mutation-toast";

export interface User {
  id?: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  price: number;
}

export interface GetUsersParams extends QueryParams {
  page?: number;
  limit?: number;
  search?: string;
}

export const UsersApi = createApi({
  reducerPath: "getUsersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6902253db208b24affe53343.mockapi.io/api",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsersApi: builder.query<User[], GetUsersParams | void>({
      query: (params) => {
        const queryString = params ? convertJSONToQueryString(params) : "";
        return {
          url: `/users/list${queryString}`,
          method: "Get",
        };
      },
      keepUnusedDataFor: 0,
      providesTags: ["Users"],
      transformResponse: (response: User[]) => response,
    }),
    deleteUserApi: builder.mutation<{ success: boolean }, string>({
      query: (userId) => ({
        url: `/users/list/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
      onQueryStarted(_, { queryFulfilled }) {
        return handleMutationToast(queryFulfilled);
      },
    }),
    AddUserApi: builder.mutation<{ success: boolean }, Partial<User>>({
      query: (payLoad) => {
        return {
          url: `/users/list`,
          method: "POST",
          body: payLoad,
        };
      },
      invalidatesTags: ["Users"],
      onQueryStarted(_, { queryFulfilled }) {
        return handleMutationToast(queryFulfilled);
      },
    }),
    updateUserApi: builder.mutation<
      { success: boolean },
      Partial<User> & { id: string }
    >({
      query: ({ id, ...body }) => ({
        url: `/users/list/${id}`,
        method: "PUT",
        body,
      }),
      onQueryStarted(_, { queryFulfilled }) {
        return handleMutationToast(queryFulfilled);
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersApiQuery,
  useDeleteUserApiMutation,
  useAddUserApiMutation,
  useUpdateUserApiMutation,
} = UsersApi;
