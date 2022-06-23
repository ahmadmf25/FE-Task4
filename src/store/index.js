// import configureStore
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

/**
 * Buat Store.
 * Menyimpan berbagai Slice Reducer
 */

const store = configureStore ({
    reducer : {
        movies : moviesReducer,
    },
});

export default store;