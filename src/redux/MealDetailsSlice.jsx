import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const mealDetails = createAsyncThunk("meals/fetching/", async (id) => {
  const { data } = await axios.get(
    `https://api-creation-lilac.vercel.app/api/diets/${id}`,
  );
  return data;
});

let MealDetailsSlice = createSlice({
  name: "mealInfo",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(mealDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(mealDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(mealDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default MealDetailsSlice.reducer;
