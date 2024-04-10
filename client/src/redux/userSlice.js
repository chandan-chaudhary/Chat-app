
import {createSlice}  from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{
     user: {},
     processStart: false,
    },

    reducers:{
        processStart: (state)=>{
            state.processStart = true;
        },
        processSuccess: (state, action)=>{
            state.processStart = false;
            state.user = action.payload;
        },
       
    }
});

export const {processStart, processSuccess} = userSlice.actions;
export default userSlice.reducer; 