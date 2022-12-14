import {configureStore} from "@reduxjs/toolkit";
import {shopApi} from "./shop/shop.api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);