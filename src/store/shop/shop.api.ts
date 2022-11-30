import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../../models/models";

export const shopApi = createApi({
    reducerPath: 'shop/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: build => ({
        searchProducts: build.query<Product[], string>({
            query: (search: string) => ({
                url: '/products',
                params: {
                    limit: search
                }
            })
        })
    })
});

export const {useSearchProductsQuery} = shopApi;