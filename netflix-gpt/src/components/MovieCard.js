import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
    return (
        <div className="flex-none w-40 pr-4">
            <img className="w-full"
                alt="movieCard"
                src={IMG_CDN_URL + posterPath}
            />
        </div>
    )
}

export default MovieCard;
