import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

export const login = createAsyncThunk('user/login',async (data:Object,thunkApi)=>{
    let userData = {...data,expiresInMins:30};
    try{
        const res = await axiosInstance.post('auth/login',userData)
        localStorage.setItem('token', res.data.token);
        return res.data;
    }catch(e){
        return thunkApi.rejectWithValue({})
    }
});

export const oldcheckAuthStatus = createAsyncThunk('user/checkAuthStatus',async (data:Object,thunkApi)=>{
    const token = localStorage.getItem('token');
    if(token){
        try{
            const res = await axiosInstance.get('user/me',{
                method:'GET',
                headers: {
                    'Authorization': 'Bearer /* YOUR_TOKEN_HERE */'
                }
            });
            return res.data;
        }catch(e){
            return thunkApi.rejectWithValue({})
        }
    }else{
        return null
    }
    
});



