
import { useState } from "react";
import useSearchMovies from "../hooks/useSearchMovies";  // Assuming the hook is in hooks directory

const GptSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    // Call the custom hook and pass the searchQuery
    useSearchMovies(searchQuery);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Trigger the search on form submit (searchQuery is already handled by useSearchMovies)
    };

    return (
        <div className="p-16 z-10">
            <form className="pt-[20%] h-10" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    className="p-4 m-4 w-96"
                    value={searchQuery}
                    onChange={handleSearchChange}  // Update query state on input change
                    placeholder="Search for a movie..."
                />
                <button
                    className="py-2 px-4 bg-red-700 text-white rounded-lg"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
