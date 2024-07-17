import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder : builder.mutation({
            query: (order) => {
                return {
                    url: `/order`,
                    method: "POST",
                    body: order
                }
            }
        })
    })
})

export default orderApi