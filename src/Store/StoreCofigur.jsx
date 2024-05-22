import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./ReduxSlice";

export const store = configureStore({
    reducer: {
        counter :counterSlice,
    },
})
