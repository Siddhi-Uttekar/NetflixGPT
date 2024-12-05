import { useState, useRef } from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";
import {checkValidata} from "../utils/validate"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [isSignInForm, setSignInForm]= useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        //validate form data
        const message = checkValidata(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        //sign in sign up user otherwise
        if(!isSignInForm)
            {
                //sign up logic
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
             const user = userCredential.user;
             console.log(user);
             navigate("/browse");
               })
         .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
            setErrorMessage(`${errorCode} - ${errorMessage}`);
             console.error("Error during sign up:", errorCode, errorMessage);
                           });

            }
        else
           {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
            })
         .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-"+ errorMessage)
          });
           }


    }

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }

    return (
        <div className="relative min-h-screen">
            <Header />
            <div className="absolute inset-0">
                <img
                    src={BG_URL}
                    alt="background-img"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex items-center justify-center min-h-screen relative z-10">
                <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 p-9 bg-black bg-opacity-75 rounded justify-start align-center ">

                    <h1 className="text-slate-50 text-center font-bold text-3xl m-2 ">
                    {isSignInForm ? "Sign In": "Sign Up"}</h1>
                    {!isSignInForm && (<input ref={name} type="text" placeholder="Enter Full Name" className="p-2 m-2 w-full bg-slate-800 rounded text-white" />)}

                    <input
                    ref = {email}
                     type="text"
                     placeholder="Enter email"
                     className="p-2 m-2 w-full bg-slate-800 rounded text-white"
                     />

                    <input
                    ref = {password}
                    type="password"
                    placeholder="Password"
                    className="p-2 m-2 w-full bg-slate-800 rounded text-white"
                    />

                    <p className="text-red-600  px-3 font-bold text-m">{errorMessage}</p>

                    <button
                    className="p-3 m-3 w-full bg-red-600 text-white text-center rounded"
                     onClick={handleButtonClick}>
                    {isSignInForm?  "Sign In" : "Sign Up"}
                    </button>

                    <p className="py-4 px-3 text-slate-50 cursor-pointer "
                       onClick={toggleSignInForm}>
                       {isSignInForm? " New to Netflix? Sign Up Now" : "Already registered? Sign In"}
                    </p>


                </form>
            </div>
        </div>
    );
}

export default Login;