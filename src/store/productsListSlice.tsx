import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../service/axiosInstance"

const initialState = {
    allProducts : [],
    categoryproducts:[],
    isLoading: false,
    status: 'idle'
}

export const getAllProducts = createAsyncThunk('product/getAllProducts',async (_,thunkApi)=>{
    try{
        const res = await axiosInstance.get('products')
        return res.data;
    }catch(e){
        console.error(e);
    }
})

export const getCategoryProducts = createAsyncThunk('product/getCategoryProducts',async (categoryId,thunkApi)=>{
    try{
        const res = await axiosInstance.get(`https://dummyjson.com/products/category/${categoryId}`)
        return res.data;
    }catch(e){
        console.error(e);
    }
})

const productsList = createSlice({
    name:'productsList',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.allProducts = action.payload.products
        })
        .addCase(getCategoryProducts.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(getCategoryProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.categoryproducts = action.payload.products
        })
    }
});


export const {} = productsList.actions;
export default productsList;
