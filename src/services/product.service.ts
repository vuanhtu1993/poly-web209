import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../models'

export const productAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000"
  }),
  tagTypes: ["product"],
  endpoints: builder => ({
    getProduct: builder.query<IProduct[], void>({
      query: () => "/products",
      providesTags: ["product"]
    }),
    removeProduct: builder.mutation({
      query: (id: number) => ({
        url: "/products/" + id,
        method: "DELETE"
      }),
      invalidatesTags: ["product"]
    }),
    addProduct: builder.mutation({
      query: (product: IProduct) => ({
        url: "/products",
        method: "POST",
        body: product
      }),
      invalidatesTags: ["product"]
    })
  })
})

export const {
  useGetProductQuery,
  useRemoveProductMutation,
  useAddProductMutation } = productAPI
