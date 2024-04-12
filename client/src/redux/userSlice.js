
import {createSlice}  from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{
     userData: {},
     allUsers:[],
     processStart: false,
     processError: '',
    },

    reducers:{
        processStart: (state)=>{
            state.processStart = true;
        },
        processSuccess: (state, action)=>{
            state.processStart = false;
            state.userData = action.payload;
        },
        processError: (state, action)=>{
            state.processStart = false;
            state.processError  = action.payload;
        },
        addAllUser : (state, action)=>{
            state.allUsers = action.payload;
        },
        logout: (state, action) =>{
            return {};
        }
    }
});

export const {processStart, processSuccess, processError,addAllUser, logout} = userSlice.actions;
export default userSlice.reducer; 