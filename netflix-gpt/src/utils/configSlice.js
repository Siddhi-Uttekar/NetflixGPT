import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers: {
        chageLanguage: (state, action) => {
            state.lang = action.payload;
        },
    }
})

export const {chageLanguage} = configSlice.actions;

export default configSlice.reducer;