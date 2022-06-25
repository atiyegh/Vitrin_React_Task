import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";


export const Store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})
