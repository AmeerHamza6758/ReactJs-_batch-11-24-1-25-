import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducers/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
