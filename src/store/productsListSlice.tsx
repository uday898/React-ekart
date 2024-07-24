import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    products : [],
    isLoading: true,
    status: 'idle'
}

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/',
})

export const getProducts = createAsyncThunk('product/getProducts',async (_,thunkApi)=>{
    try{
        const res = await axiosInstance.get('products')
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
        builder.addCase(getProducts.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.products = action.payload.products
        })
    }
});


export const {} = productsList.actions;
export default productsList;
