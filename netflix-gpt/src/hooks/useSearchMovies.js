import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addSearchMovies } from "../utils/moviesSlice";

// Add a parameter for the search query
const useSearchMovies = (query) => {
    const dispatch = useDispatch();

    const getSearchMovies = async () => {
        if (!query) return; // Only call if query is provided

        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`, // Add query here
            API_OPTIONS
        );

        const json = await data.json();
        dispatch(addSearchMovies(json.results)); // Store the results in the Redux store
    };

    useEffect(() => {
        getSearchMovies();
    }, ); // Run when the query changes
};

export default useSearchMovies;
