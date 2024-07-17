// import { TProduct } from "../../types";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (payload) => {
        return {
          url: "/products",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Product"],
    }),
    getAllProduct: builder.query({
      query: ({ searchTerm, categories, sort }) => {
        const params = new URLSearchParams();
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (categories) {
          params.append("category", categories);
        }
        if (sort) {
          params.append("sort", sort.sort);
        }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),
    getFeaturedProduct: builder.query({
      query: () => {
        return {
          url: "/products/featured",
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ payload, id }) => {
        console.log(payload)
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export default productApi;
