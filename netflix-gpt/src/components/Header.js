import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constant";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

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
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 w-full px-7 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-48" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="relative flex items-center space-x-4 p-2">
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
