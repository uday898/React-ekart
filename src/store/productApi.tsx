import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/',
        prepareHeaders:(headers,{getState})=>{
            let token = getState().user.userToken
            if(token){
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers;
        },
        timeout: 10000
    }),
    endpoints:(builder)=>({
        getProductDetails: builder.query({
            query:(id)=> `products/${id}`
        }),
        checkAuthStatus: builder.query({
            query:()=> 'user/me'
        })
    })
})

export const {useGetProductDetailsQuery,useCheckAuthStatusQuery} = productApi;