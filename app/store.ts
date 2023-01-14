import { configureStore } from "@reduxjs/toolkit";
import randomUserSlice from "./features/toggleRandomUserSlice";

export const store = configureStore({
  reducer: {
    randomUser: randomUserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
