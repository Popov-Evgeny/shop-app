import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../../models/models";

export const shopApi = createApi({
    reducerPath: 'shop/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    refetchOnFocus: false,
    endpoints: build => ({
        getProducts: build.query<Product[], string>({
            query: (amount:string) => ({
                url: '/products',
                params: {
                    limit: amount
                }
            })
        }),
        getCategories: build.query<string[], void>({
            query: () => ({
                url: `/products/categories`,
            })
        }),
        getCategoryProduct: build.query<Product[], string>({
            query: (category) => ({
                url: `/products/category/${category}`,
            })
        }),
    })
});

export const {useGetProductsQuery, useLazyGetCategoriesQuery} = shopApi;