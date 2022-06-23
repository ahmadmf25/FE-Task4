import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/data";

/** 
 * Buat Slice : untuk generate action dan reducer
 * menerima param object : name, initialState, reducer
*/

const moviesSlice = createSlice({
    name : "Movies Slice",
    initialState : {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            // add movie to movies
            state.movies.push(action.payload);
        },
        updateMovies(state, action) {
            state.movies = action.payload;
        }
    },
});
// Generate Action dan reducer
const moviesReducer = moviesSlice.reducer;
const {addMovie, updateMovies} = moviesSlice.actions

export default moviesReducer;
export { addMovie, updateMovies };