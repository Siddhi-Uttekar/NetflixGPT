import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO , USER_AVATAR} from "../utils/constant";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });

    }

    return (
        <div className="absolute top-0 left-0 w-full px-7 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center ">
            <img className="w-48" src={NETFLIX_LOGO}
             alt="logo" />

          <div className="relative flex items-center space-x-4 p-2">
            <img className="w-12 h-12 "
            src={USER_AVATAR}
            alt="user_avatar">
            </img>
            <button onClick={handleSignOut} className="font-bold text-slate-50 ">(Sign Out)</button>
        </div>

        </div>

    );

}

export default Header;