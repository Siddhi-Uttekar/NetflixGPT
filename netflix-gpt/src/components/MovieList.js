import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="">
            <h1 className="text-3xl text-white mb-4 py-2">{title}</h1>
            <div className="flex overflow-x-scroll ">
                {
                    movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;
