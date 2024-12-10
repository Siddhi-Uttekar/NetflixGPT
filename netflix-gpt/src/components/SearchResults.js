import { useSelector } from "react-redux";
import MovieList from "./MovieList";  // Assuming you have a MovieList component to display movies

const SearchResults = () => {
    const searchMovies = useSelector((store) => store.movies.searchMovies);

    return (
        <div>
            {searchMovies.length > 0 ? (
                <MovieList title="Search Results" movies={searchMovies} />
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchResults;
