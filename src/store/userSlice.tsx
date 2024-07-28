import { createSlice } from "@reduxjs/toolkit";
import { login } from "../service/authActions";

type User = {
    loginStatus: boolean,
    firstName: string,
    lastName:string,
    email:string,
    image:string,
    token:string,
};

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
    userInfo: {},
    isLoading: false,
    isAuthenticated: false,
    error : null,
    status: 'loggedout',
    userToken
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logOut:(state)=>{
            const token = localStorage.removeItem('token');
            state.isLoading = false;
            state.isAuthenticated = false;
            state.userInfo = {};
            state.userToken = '';
            state.status = 'loggedOut'
        },
        setUserData:(state,{payload})=>{
            state.isLoading = false;
            state.isAuthenticated = true;
            state.userInfo = payload;
            state.status = 'loggedIn'
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            state.isAuthenticated = true;
            state.userInfo = payload;
            state.userToken = payload.token;
            state.status = 'loggedIn'
        })
        .addCase(login.rejected, (state,action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            
        })
    }
})


export const {setUserData,logOut} = userSlice.actions;
export default userSlice;

