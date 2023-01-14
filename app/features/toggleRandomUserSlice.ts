import { createSlice } from "@reduxjs/toolkit";

interface randomUser {
  isRandomUser: boolean;
}
const initialState: randomUser = {
  isRandomUser: false,
};
const toggleRandomUserSlice = createSlice({
  name: "toggleRandomUserSlice",
  initialState,
  reducers: {
    toggleRandomUser: (state) => {
      state.isRandomUser = !state.isRandomUser;
    },
  },
});

export const { toggleRandomUser } = toggleRandomUserSlice.actions;
export default toggleRandomUserSlice.reducer;
