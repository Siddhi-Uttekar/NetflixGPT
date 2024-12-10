import { useSelector } from "react-redux"; // Import useSelector
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constant";
import MovieList from "./MovieList";

const GptSearch = () => {
    // Get the search movies from the Redux store
    const searchMovies = useSelector((store) => store.movies.searchMovies);

    return (
        <>
            <div className="fixed -z-10 ">
                <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
            </div>
            <div className="flex justify-center items-center ">
                <GptSearchBar />
                </div>
                <div className="flex">
                {/* Pass searchMovies as a prop to MovieList */}
                {searchMovies?.length > 0 && <MovieList title="Search Results" movies={searchMovies} />}
                </div>

        </>
    );
};

export default GptSearch;
