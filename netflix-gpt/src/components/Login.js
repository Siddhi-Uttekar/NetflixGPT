import { useState } from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";
const Login = () => {

    const [isSignInForm, setSignInForm]= useState(true);

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
                <form className="w-3/12 p-9 bg-black bg-opacity-75 rounded justify-start align-center ">
                <h1 className="text-slate-50 text-center font-bold text-3xl m-2 ">
                    {isSignInForm ? "Sign In": "Sign Up"}</h1>
                    {!isSignInForm && (<input type="text" placeholder="Enter Full Name" className="p-2 m-2 w-full bg-slate-800 rounded " />)}
                    <input type="text" placeholder="Enter email" className="p-2 m-2 w-full bg-slate-800 rounded " />
                    <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-slate-800 rounded" />
                    <button className="p-3 m-3 w-full bg-red-600 text-white text-center rounded">Sign In</button>
                    <p className="py-4 px-3 text-slate-50 cursor-pointer " onClick={toggleSignInForm}>
                        {isSignInForm? " New to Netflix? Sign Up Now" : "Already registered? Sign In"}</p>
                </form>
            </div>
        </div>
    );
}

export default Login;