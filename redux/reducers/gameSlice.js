import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const gameCatApi = createAsyncThunk(
  'games/fetchCatApi',
  async (cat) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games/tiles?gameCategories=${cat}`)
      const catData = await res.json();      
      return catData;
    } catch (error) {
      console.log("error", error)
    }
  }
);

export const gameSearchApi = createAsyncThunk(
  'games/fetchGamesApi',
  async (searchText) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games/tiles?search=${searchText}`)
      const catData = await res.json();      
      return catData;
    } catch (error) {
      console.log("error", error)
    }
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState: {
    categories:[],
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gameCatApi.fulfilled, (state, action) => {
      state.list = action.payload;
    });

    builder.addCase(gameSearchApi.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default gameSlice.reducer;
