import { NETFLIX_LOGO } from "../utils/constant";
const Header = () => {
    return (
        <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-52" src={NETFLIX_LOGO} alt="logo" />
        </div>
    );

}

export default Header;