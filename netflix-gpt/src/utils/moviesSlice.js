import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        searchMovies:[]
    },
    reducers : {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },

        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload;
        },

        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        },

        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },

        addSearchMovies: (state, action) => {
            state.searchMovies = action.payload;
        },
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addSearchMovies} = moviesSlice.actions;

export default moviesSlice.reducer;