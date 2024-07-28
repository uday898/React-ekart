import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../service/axiosInstance"

const initialState = {
    categories : [],
    isLoading: false,
    status: 'idle'
}

export const getCategoryList = createAsyncThunk('category/getCategoryList',async (_,thunkApi)=>{
    try{
        const res = await axiosInstance.get('products/categories')
        return res.data;
    }catch(e){
        console.error(e);
    }
})

const categories = createSlice({
    name:'categories',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getCategoryList.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(getCategoryList.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.categories = action.payload
        })
    }
});


export const {} = categories.actions;
export default categories;
