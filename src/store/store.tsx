import { configureStore } from "@reduxjs/toolkit";
import productsList from "./productsListSlice";

const store = configureStore({
    reducer:{
        allproducts : productsList.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
});


export default store;