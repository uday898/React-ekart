import { configureStore } from "@reduxjs/toolkit";
import productsList from "./productsListSlice";
import userSlice from "./userSlice";
import categories from "./category";
import { productApi } from "./productApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer:{
        productApi: productApi.reducer,
        user: userSlice.reducer,
        categories:categories.reducer,
        products : productsList.reducer,
        
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware)
});

setupListeners(store.dispatch)

export default store;