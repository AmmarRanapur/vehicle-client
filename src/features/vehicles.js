import { createSlice } from '@reduxjs/toolkit';

const vehicleSlice = createSlice({
    name:"vehicles",
    initialState : {value:[]},
    reducers:{
        updateList:(state,action) => {
            state.value = action.payload;
        },
    }
});

export const {updateList} = vehicleSlice.actions;

export default vehicleSlice.reducer;
