import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const gameSlice = createSlice({
  name: "game",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    SET_NAME: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { SET_NAME } = gameSlice.actions;
export default gameSlice.reducer;
