import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMeals = createAsyncThunk("meals/fetching/",async ()=>{
    const {data} = await axios.get("https://api-creation-lilac.vercel.app/api/diets");
    return data;
});

let mealsSlice = createSlice({
    name:"meals",
    initialState:{
        items:[],
        loading:false,
        error:null,

        page:1,
        perPage:6,
    },

    reducers:{
        setPage:(state,action)=>{
            state.page = action.payload
        }
    },

    extraReducers:(builder)=>{
        builder
            .addCase(fetchMeals.pending,(state)=>{
                state.loading = true;
            })
            .addCase(fetchMeals.fulfilled,(state,action)=>{
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchMeals.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export const {setPage} = mealsSlice.actions;
export default mealsSlice.reducer; 