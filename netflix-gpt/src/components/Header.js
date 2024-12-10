import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constant";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { chageLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

  const handleGPTSearchClick = () => {
    //toggle GPT Search
    dispatch(toggleGptSearchView())
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(chageLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Clean up subscription on unmount
    //dependency array ensures useEffect only runs when dispatch or navigate changes,
    //prevents infinite loop by only using useEffect for the above
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 w-full px-7 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-48" src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="relative flex items-center space-x-4 p-2">
          {showGptSearch && (
          <select className="p-2 bg-grey-900 m-2"
          onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map(lang=> (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          )}
          <button className="bg-purple-600 p-3  text-white mx-4 my-2 rounded-lg "
          onClick={handleGPTSearchClick}
          >{showGptSearch? "Homepage": "GPT Search"}</button>

          <img className="w-12 h-12" src={USER_AVATAR} alt="user_avatar" />
          <button onClick={handleSignOut} className="font-bold text-slate-50">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
